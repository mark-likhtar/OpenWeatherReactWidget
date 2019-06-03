weather-widget-react is a module for obtaining weather information.

---

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install widget.

```bash
npm install weather-widget-react
```
---

## Usage

```javascript
import WeatherWidget from 'weather-widget-react';

  <WeatherWidget
    apiKey='7cc0a3060e58f17a24e70b46ad9ed851'
    position='top-left'
    location='London'
    units='metric'
    lang='eng'
  />,
```
---
## Props

* apiKey: string - Open weather api key (Передается ключ для апи)
* location: string | null - weather location (Название города для которого       выводить погоду, если null то брать текущую локацию браузера)
* units: string - Metric/Imperial units (Единицы измерения градусы цельсия или фаренгейта)
* lang: string - Russian / English language (Выбор языка отображения) (в дальнейшем с возможностью расширения)
* position: string - top-left / top-right / bottom-left / bottom-right (Метоположение виджета на странице)
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

Licensed under The MIT License (MIT)
For the full copyright and license information, please view the LICENSE.txt file.

**[MIT license](http://opensource.org/licenses/mit-license.php)**