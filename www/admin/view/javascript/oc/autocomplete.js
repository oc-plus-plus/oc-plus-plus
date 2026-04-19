/**
 * Universal autocomplete handler for OpenCart
 *
 * @param {string} selector   - Input selector (e.g. "#input-category")
 * @param {string} route      - Autocomplete route (e.g. "catalog/category.autocomplete")
 * @param {string} token      - User token
 * @param {string} filter     - Filter parameter name (e.g. "filter_name")
 * @param {string} idField    - Field name for the ID (e.g. "category_id")
 * @param {string} labelField - Field name for the label (e.g. "name" or "model")
 * @param {string} hiddenId   - (Optional) Selector for hidden input to store the ID
 */
function initAutocomplete(selector, route, token, filter, idField, labelField, hiddenId = '') {
    $(selector).autocomplete({
        'source': function (request, response) {
            $.ajax({
                url: 'index.php?route=' + route + '&user_token=' + token + '&' + filter + '=' + encodeURIComponent(request),
                dataType: 'json',
                success: function (json) {
                    // Standard check for "None" option
                    if (selector.includes('category') || selector.includes('manufacturer')) {
                        let noneOption = {};
                        noneOption[labelField] = ' --- None --- ';
                        noneOption[idField] = '';
                        json.unshift(noneOption);
                    }

                    response($.map(json, function (item) {
                        return {
                            label: item[labelField], // Explicitly use the requested field
                            value: item[idField]
                        }
                    }));
                }
            });
        },
        'select': function (item) {
            $(selector).val(decodeHTMLEntities(item['label']));
            if (hiddenId) {
                $(hiddenId).val(item['value']);
            }
        }
    });
}
