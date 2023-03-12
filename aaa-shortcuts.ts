// Shortcuts for tutorial so that things go faster.

function run_importContacts() {
    let contactSheet = new SheetData(new RawSheetData(contactConfig))
    importContactsV2(contactSheet)
}

function scheduler() {
    let config = mergeConfigs_()
    // run the contacts importer every two hours
    ScriptApp.newTrigger("run_importContacts").timeBased().everyHours(2).create()
    // run the area name updater every day- it doesn't need to happen that often.
    ScriptApp.newTrigger("updateAreaNames").timeBased().everyDays(1).create()
    // Update the names in forms automatically so that it stays up to date.
    let form = FormApp.openByUrl(config.response_form_url)
    ScriptApp.newTrigger("runUpdates").forForm(form).onFormSubmit().create()
}