export function createShippingZone(){
	
    return `
    <form id="createShippingZone" action="#/api/shippingZones" method="POST">
        <div class="card-section border-b box-border">
            <div class="flex justify-between card-section-header mb-1">
                <h3 class="card-session-title">Zone name</h3>
            </div>
            <div class="card-session-content pt-lg">
                <div class="form-field-container null">
                    <div class="field-wrapper flex flex-grow">
                        <input type="text" name="name" placeholder="Enter zone name" value="">
                        <div class="field-border"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-section border-b box-border">
            <div class="flex justify-between card-section-header mb-1">
                <h3 class="card-session-title">Country</h3>
            </div>
            <div class="card-session-content pt-lg">
                <div class=" css-b62m3t-container">
                    <span id="react-select-2-live-region" class="css-7pg0cj-a11yText"></span>
                    <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
                    <div class=" css-1s2u09g-control">
                        <div class=" css-1d8n9bt">
                            <div class=" css-14el2xx-placeholder" id="react-select-2-placeholder">Select...</div>
                            <div class=" css-ackcql" data-value="">
                                <input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-2-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" aria-label="Select country" role="combobox" aria-describedby="react-select-2-placeholder" value="" style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;">
                            </div>
                        </div>
                        <div class=" css-1wy0on6">
                            <span class=" css-1okebmr-indicatorSeparator"></span>
                            <div class=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <input name="country" type="hidden" value=""></div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="flex justify-between card-section-header mb-1">
                    <h3 class="card-session-title">Provinces/States</h3>
                </div>
                <div class="card-session-content pt-lg">
                    <div class=" css-b62m3t-container">
                        <span id="react-select-3-live-region" class="css-7pg0cj-a11yText"></span>
                        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="css-7pg0cj-a11yText"></span>
                        <div class=" css-1s2u09g-control">
                            <div class=" css-1d8n9bt">
                                <div class=" css-14el2xx-placeholder" id="react-select-3-placeholder">Select...</div>
                                <div class=" css-ackcql" data-value="">
                                    <input class="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-3-input" spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-3-placeholder" value="" style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;">
                                </div>
                            </div>
                            <div class=" css-1wy0on6">
                                <span class=" css-1okebmr-indicatorSeparator"></span>
                                <div class=" css-tlfecz-indicatorContainer" aria-hidden="true">
                                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input name="provinces[]" type="hidden" value="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-section border-b box-border">
                <div class="card-session-content pt-lg">
                    <div class="flex justify-end gap-1">
                        <button type="button" class="button secondary"><span>Cancel</span></button>
                        <button type="button" class="button primary"><span>Save</span></button>
                    </div>
                </div>
            </div>
    </form>
    `
}
