ymaps.ready(init)

function init() {
  var myMap1 = new ymaps.Map('map1', {
    center: [55.76490136360698, 37.69641901207108],
    zoom: 11,
  })

  myPlacemark1 = new ymaps.Placemark(
    [55.76490136360698, 37.69641901207108],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: '/images/svg/map-pin.svg',
      iconImageSize: [60, 90],
      iconImageOffset: [-30, -70],
    },
  )

  myMap1.geoObjects.add(myPlacemark1)

  var myMap2 = new ymaps.Map('map2', {
    center: [55.05825456964774, 82.9658665],
    zoom: 12,
  })

  myPlacemark2 = new ymaps.Placemark(
    [55.05825456964774, 82.9658665],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: '/images/svg/map-pin.svg',
      iconImageSize: [60, 90],
      iconImageOffset: [-30, -70],
    },
  )

  myMap2.geoObjects.add(myPlacemark2)
}
