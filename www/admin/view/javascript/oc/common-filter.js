/**
 * Universal filter handler for OpenCart
 *
 * @param {string} formId - Filter form ID (e.g. "#form-filter")
 * @param {string} listId - List container ID (e.g. "#category")
 * @param {string} route  - Controller route (e.g. "catalog/category")
 * @param {string} userToken - User token
 */
function initCommonFilter(formId, listId, route, userToken) {
    let $form = $(formId);
    let $list = $(listId);

    let tokenPart = '&user_token=' + userToken;
    let routePart = 'index.php?route=' + route;

    $form.on('submit', function (e) {
        e.preventDefault();

        let filterData = {};

        // We use only non-empty fields
        $(this).find('input[name], select[name]').each(function () {
            let value = $(this).val();
            if (value !== '' && value !== null) {
                filterData[$(this).attr('name')] = value;
            }
        });

        let urlParams = $.param(filterData);
        let fullUrl = routePart + (urlParams ? '&' + urlParams : '') + tokenPart;

        window.history.pushState({}, null, fullUrl);
        $list.load(routePart + '.list' + (urlParams ? '&' + urlParams : '') + tokenPart);
    });

    $('#button-reset').on('click', function () {
        location = routePart + tokenPart;
    });
}
