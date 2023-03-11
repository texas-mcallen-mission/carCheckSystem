// Shortcuts for tutorial so that things go faster.

function run_importContacts() {
    let contactSheet = new SheetData(new RawSheetData(contactConfig))
}

function scheduler() {
    let config = mergeConfigs_()
    // run the contacts importer every two hours
    ScriptApp.newTrigger("run_importContacts").timeBased().everyHours(2).after(5).create()
    // run the area name updater every day- it doesn't need to happen that often.
    ScriptApp.newTrigger("updateAreaNames").timeBased().everyDays(1).after(5).create()
    // Update the names in forms automatically so that it stays up to date.
    let form = FormApp.openById(config.response_form_url)
    ScriptApp.newTrigger("runUpdates").forForm(form).onFormSubmit().create()
}