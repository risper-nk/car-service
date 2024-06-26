from flask import Flask,render_template, request, session, jsonify,redirect
from db import Login,Register,deleteBooking,getBooking,getService,getUser,bookService,getVehicles,getCategories,getServices,getBookings,getInvoice
import json
from keys import Key
import subprocess
import random

app = Flask(__name__)

app.secret_key = "secret key"
SERVER_NAME = 'https://serviceadmin-7b27fe0600fd.herokuapp.com'

@app.route('/robots.txt')
def robots_txt():
    robots_txt_content = """
    User-agent: *
     
    """
    return Response(robots_txt_content, mimetype='text/plain')

@app.route("/logout")
def logout():
    session.clear()
    return redirect("login")

@app.route("/dashboard")
def dashboard():
    if session.get("user") == None:
        return redirect("login")
    if request.args.get("book") and request.args.get("delete"):
        book_id = request.args.get("book")
        dl = deleteBooking(user=session.get("user"),server=SERVER_NAME,book=book_id)
        msg = dl.get("message") if dl else "Incomplete"
        print(msg)
        return redirect("dashboard")
    book = None
    if request.args.get("book"):
        book = getBooking(user=session.get("user"),book=request.args.get("book"),server=SERVER_NAME)
        book = book if book else None
        
    orders = getBookings(user=session.get("user"),server=SERVER_NAME)
    user = getUser(user=session.get("user"),server=SERVER_NAME)
    user = user.get("user") if user.get("user") else {}
    if user.get("_id") == None:
        session["user"] = None
        return redirect("login")
    return render_template("dashboard.html",**locals())

@app.route("/checkout")
def checkout():
    user = getUser(user=session.get("user"),server=SERVER_NAME)
    user = user.get("user") if user.get("user") else {}
    invoice = getInvoice(user=session.get("user"),server=SERVER_NAME,id=request.args.get("invoice"))
    invoice = invoice if invoice.get("invoice") else {}
    return render_template("checkout.html",**locals())

@app.route("/register",methods=['GET','POST'])
def signup():
    msg = None
    if request.method == "POST" and "email" in request.form:
        email = request.form["email"]
        password = request.form["password"]
        username = request.form["name"]
        phone = request.form["phone"]
        result = Register(username,password,email,phone,server=SERVER_NAME)
        print("res",str(result))
        if result != False:
            if result.get('token') != None:
                session["user"] = result['token']
                return redirect("/dashboard")
            if result.get("next") != None:
                return redirect(result["next"])
        msg = result.get('message') if isinstance(result,dict) else "Invalid credential"
        #msg = "Invalid Credentials"
    return render_template("register.html",msg=msg)


@app.route("/login",methods=['GET','POST'])
def login():
    msg = None
    if request.method == "POST" and "email" in request.form:
        email = request.form["email"]
        password = request.form["password"]
        result = Login(email,password,server=SERVER_NAME)
        print("res",str(result))
        if result != False:
            if result.get('token') != None:
                session["user"] = result['token']
                return redirect("/dashboard")
            msg = result.get('message')
        msg = "Invalid Credentials"
    return render_template("login.html",msg=msg)

@app.route("/index")
@app.route("/")
def landing():
    vehicles = getVehicles()
    return render_template("index.html",**locals())

@app.route("/services")
def service():
    services = getServices(server=SERVER_NAME)
    if not services:
        services = []
    current_service = request.args.get('service') if request.args.get("service") else None
    if current_service:
        for c in services:
            if c["key"] == current_service:
                current_service = c
                
                break
        categories = getCategories(id=current_service.get('_id'),server=SERVER_NAME)
    
        #return redirect("/services?service="+current_service["key"])
    return render_template("services.html",**locals())

@app.route("/book",methods=['GET','POST'])
def book():
    if request.args.get('id') == None or len(request.args.get('id')) < 2:
        return redirect('/services')
    
    vehicles = getVehicles()
    categories = getCategories(id=request.args.get("id"),server=SERVER_NAME)
    msg = False
    if request.method == "POST" :
        
        service = request.args.get("id") 
        if session.get("user") == None:
            try:
                email= request.form["email"]
                phone = request.form['phone']
                username = request.form['name']
                password= "123456"
                result = Register(username,password,email,phone,server=SERVER_NAME)
                print(result)
                if result == False:
                    msg = 'Error: An error occured, try again'
                    return render_template('book.html',**locals())
                    
                msg = result.get("message")
                
                if result.get("token") == False:
                    return render_template("book.html",**locals())
                session['user'] = result.get("token") 
            except Exception as e:
                msg = str(e)
                return render_template("book.html",**locals())
        result = session.get("user")
        service_date = request.form["appointment-date"]
        service_time = request.form['time-frame']
        vehicle_mileage = request.form['vehicle-mileage']
        vehicle_make = request.form['vehicle-make']
        vehicle_year = request.form['vehicle-year']
        category = request.form["category_id"]
        category = category.split(',')
        comments = request.form["message"]
        book = bookService(book_data ={
            'service_date':service_date,
            'service_time':service_time,
            'service_category':category,
            'comments':comments,
            'vehicle_mileage':vehicle_mileage,
            'vehicle_make':vehicle_make,
            'vehcile_year':vehicle_year,
            'service':service,
        },id=service,user=session.get("user"),server=SERVER_NAME)
        
        if book.get("book") == None:
            msg = "Could not book, an error occured {}".format(book.message)
            return render_template("book.html",**locals())
        msg = "Booked Success"
    
        #route = "/dashboard"
        return redirect("dashboard")
    msg = None
    return render_template("book.html",**locals())

node_command = ["node", "admin/server.js"]


if __name__ == '__main__':
 
    app.run("0.0.0.0",debug=True)