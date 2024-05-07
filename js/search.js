$(function () {
  $('#search')
    .autocomplete({
      source: function (request, response) {
        var term = request.term.toLowerCase()

        var suggestions = [
          {
            label: 'Компания Техно-Сиб основана в 2001 году текст поиска',
            value: 'Компания Техно-Сиб основана в 2001 году текст поиска',
            url: 'https://www.google.com/search?q=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE-%D0%A1%D0%B8%D0%B1+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0+%D0%B2+2001+%D0%B3%D0%BE%D0%B4%D1%83+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE-%D0%A1%D0%B8%D0%B1+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0+%D0%B2+2001+%D0%B3%D0%BE%D0%B4%D1%83+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBBzE5OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'Компания Техно-Сиб основана в 2001 году текст поиска',
            value: 'Компания Техно-Сиб основана в 2001 году текст поиска',
            url: 'https://www.google.com/search?q=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE-%D0%A1%D0%B8%D0%B1+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0+%D0%B2+2001+%D0%B3%D0%BE%D0%B4%D1%83+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE-%D0%A1%D0%B8%D0%B1+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0+%D0%B2+2001+%D0%B3%D0%BE%D0%B4%D1%83+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBBzE5OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'В Новосибирске текст поиска',
            value: 'В Новосибирске текст поиска',
            url: 'https://www.google.com/search?q=%D0%92+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B5+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%92+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B5+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiiBBiJBTIKCAIQABiABBiiBDIKCAMQABiiBBiJBdIBBzIyM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'На сегодняшний день мы занимаем текст поиска',
            value: 'На сегодняшний день мы занимаем текст поиска',
            url: 'https://www.google.com/search?q=%D0%9D%D0%B0+%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%88%D0%BD%D0%B8%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C+%D0%BC%D1%8B+%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%9D%D0%B0+%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%88%D0%BD%D0%B8%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C+%D0%BC%D1%8B+%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBBzI0N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'Одну из ведущих текст поиска позиций на российском',
            value: 'Одну из ведущих текст поиска позиций на российском',
            url: 'https://www.google.com/search?q=%D0%9E%D0%B4%D0%BD%D1%83+%D0%B8%D0%B7+%D0%B2%D0%B5%D0%B4%D1%83%D1%89%D0%B8%D1%85+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0+%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B9+%D0%BD%D0%B0+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%BC&oq=%D0%9E%D0%B4%D0%BD%D1%83+%D0%B8%D0%B7+%D0%B2%D0%B5%D0%B4%D1%83%D1%89%D0%B8%D1%85+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0+%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B9+%D0%BD%D0%B0+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%BC&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigAdIBBzY0N2owajmoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'Рынке пищевого оборудования текст поиска',
            value: 'Рынке пищевого оборудования текст поиска',
            url: 'https://www.google.com/search?q=%D0%A0%D1%8B%D0%BD%D0%BA%D0%B5+%D0%BF%D0%B8%D1%89%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE+%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&sca_esv=1e12e656a0e41172&sxsrf=ADLYWIISB2l3GudmNL2TuiA8x4qN-9_7MA%3A1715054042402&ei=2qU5ZrKVGM_KwPAPv8qP8As&udm=&ved=0ahUKEwiy6t6X0vqFAxVPJRAIHT_lA74Q4dUDCBA&oq=%D0%A0%D1%8B%D0%BD%D0%BA%D0%B5+%D0%BF%D0%B8%D1%89%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE+%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lp=Egxnd3Mtd2l6LXNlcnAiTNCg0YvQvdC60LUg0L_QuNGJ0LXQstC-0LPQviDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40Y8g0YLQtdC60YHRgiDQv9C-0LjRgdC60LAyCBAAGIAEGKIEMggQABiABBiiBEjxClD_AVj_AXABeAGQAQCYAXagAXaqAQMwLjG4AQzIAQD4AQL4AQGYAgKgAoIBwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHAzEuMaAHgQM&sclient=gws-wiz-serp',
          },
          {
            label:
              'Упаковочных материалов, а также поставок приводной техники. текст поиска',
            value:
              'Упаковочных материалов, а также поставок приводной техники. текст поиска',
            url: 'https://www.google.com/search?q=%D0%A3%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D1%85+%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%BE%D0%B2%2C+%D0%B0+%D1%82%D0%B0%D0%BA%D0%B6%D0%B5+%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D0%BA+%D0%BF%D1%80%D0%B8%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9+%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B8.+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%A3%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D1%85+%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%BE%D0%B2%2C+%D0%B0+%D1%82%D0%B0%D0%BA%D0%B6%D0%B5+%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D0%BA+%D0%BF%D1%80%D0%B8%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9+%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B8.+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzYzMWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
        ]

        var matchedSuggestions = $.grep(suggestions, function (item) {
          return item.label.toLowerCase().indexOf(term) !== -1
        })

        response(
          $.map(matchedSuggestions, function (item) {
            var highlighted = item.label.replace(
              new RegExp('(' + term + ')', 'gi'),
              '<strong>$1</strong>',
            )
            return {
              label: highlighted,
              value: item.value,
              url: item.url,
            }
          }),
        )
      },
      html: true,
    })
    .data('ui-autocomplete')._renderItem = function (ul, item) {
    return $('<li>')
      .append($('<a>').attr('href', item.url).html(item.label))
      .appendTo(ul)
  }

  $('#search-mobile')
    .autocomplete({
      source: function (request, response) {
        var term = request.term.toLowerCase()

        var suggestions = [
          {
            label: 'Компания Техно-Сиб основана в 2001 году текст поиска',
            value: 'Компания Техно-Сиб основана в 2001 году текст поиска',
            url: 'https://www.google.com/search?q=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE-%D0%A1%D0%B8%D0%B1+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0+%D0%B2+2001+%D0%B3%D0%BE%D0%B4%D1%83+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE-%D0%A1%D0%B8%D0%B1+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0+%D0%B2+2001+%D0%B3%D0%BE%D0%B4%D1%83+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBBzE5OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'Компания Техно-Сиб основана в 2001 году текст поиска',
            value: 'Компания Техно-Сиб основана в 2001 году текст поиска',
            url: 'https://www.google.com/search?q=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE-%D0%A1%D0%B8%D0%B1+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0+%D0%B2+2001+%D0%B3%D0%BE%D0%B4%D1%83+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE-%D0%A1%D0%B8%D0%B1+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0+%D0%B2+2001+%D0%B3%D0%BE%D0%B4%D1%83+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBBzE5OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'В Новосибирске текст поиска',
            value: 'В Новосибирске текст поиска',
            url: 'https://www.google.com/search?q=%D0%92+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B5+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%92+%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B5+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiiBBiJBTIKCAIQABiABBiiBDIKCAMQABiiBBiJBdIBBzIyM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'На сегодняшний день мы занимаем текст поиска',
            value: 'На сегодняшний день мы занимаем текст поиска',
            url: 'https://www.google.com/search?q=%D0%9D%D0%B0+%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%88%D0%BD%D0%B8%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C+%D0%BC%D1%8B+%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%9D%D0%B0+%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%88%D0%BD%D0%B8%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C+%D0%BC%D1%8B+%D0%B7%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBBzI0N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'Одну из ведущих текст поиска позиций на российском',
            value: 'Одну из ведущих текст поиска позиций на российском',
            url: 'https://www.google.com/search?q=%D0%9E%D0%B4%D0%BD%D1%83+%D0%B8%D0%B7+%D0%B2%D0%B5%D0%B4%D1%83%D1%89%D0%B8%D1%85+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0+%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B9+%D0%BD%D0%B0+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%BC&oq=%D0%9E%D0%B4%D0%BD%D1%83+%D0%B8%D0%B7+%D0%B2%D0%B5%D0%B4%D1%83%D1%89%D0%B8%D1%85+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0+%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%B9+%D0%BD%D0%B0+%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%BC&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigAdIBBzY0N2owajmoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
          {
            label: 'Рынке пищевого оборудования текст поиска',
            value: 'Рынке пищевого оборудования текст поиска',
            url: 'https://www.google.com/search?q=%D0%A0%D1%8B%D0%BD%D0%BA%D0%B5+%D0%BF%D0%B8%D1%89%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE+%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&sca_esv=1e12e656a0e41172&sxsrf=ADLYWIISB2l3GudmNL2TuiA8x4qN-9_7MA%3A1715054042402&ei=2qU5ZrKVGM_KwPAPv8qP8As&udm=&ved=0ahUKEwiy6t6X0vqFAxVPJRAIHT_lA74Q4dUDCBA&oq=%D0%A0%D1%8B%D0%BD%D0%BA%D0%B5+%D0%BF%D0%B8%D1%89%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE+%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lp=Egxnd3Mtd2l6LXNlcnAiTNCg0YvQvdC60LUg0L_QuNGJ0LXQstC-0LPQviDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40Y8g0YLQtdC60YHRgiDQv9C-0LjRgdC60LAyCBAAGIAEGKIEMggQABiABBiiBEjxClD_AVj_AXABeAGQAQCYAXagAXaqAQMwLjG4AQzIAQD4AQL4AQGYAgKgAoIBwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHAzEuMaAHgQM&sclient=gws-wiz-serp',
          },
          {
            label:
              'Упаковочных материалов, а также поставок приводной техники. текст поиска',
            value:
              'Упаковочных материалов, а также поставок приводной техники. текст поиска',
            url: 'https://www.google.com/search?q=%D0%A3%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D1%85+%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%BE%D0%B2%2C+%D0%B0+%D1%82%D0%B0%D0%BA%D0%B6%D0%B5+%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D0%BA+%D0%BF%D1%80%D0%B8%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9+%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B8.+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&oq=%D0%A3%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D1%85+%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%BE%D0%B2%2C+%D0%B0+%D1%82%D0%B0%D0%BA%D0%B6%D0%B5+%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BE%D0%BA+%D0%BF%D1%80%D0%B8%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9+%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B8.+%D1%82%D0%B5%D0%BA%D1%81%D1%82+%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzYzMWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8',
          },
        ]

        var matchedSuggestions = $.grep(suggestions, function (item) {
          return item.label.toLowerCase().indexOf(term) !== -1
        })

        response(
          $.map(matchedSuggestions, function (item) {
            var highlighted = item.label.replace(
              new RegExp('(' + term + ')', 'gi'),
              '<strong>$1</strong>',
            )
            return {
              label: highlighted,
              value: item.value,
              url: item.url,
            }
          }),
        )
      },
      html: true,
    })
    .data('ui-autocomplete')._renderItem = function (ul, item) {
    return $('<li>')
      .append($('<a>').attr('href', item.url).html(item.label))
      .appendTo(ul)
  }
})
