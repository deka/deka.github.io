const
  fs = require('fs'),
  handlebars = require('handlebars'),
  handlebarsWax = require('handlebars-wax'),
  addressFormat = require('address-format'),
  moment = require('moment'),
  Swag = require('swag');

Swag.registerHelpers(handlebars);

handlebars.registerHelper({

  wrapURL: function (url) {
    if (url === null || url === '' || url === "") return "";
    let validUrl;
    validUrl = new URL(url);
    const escapedUrl = handlebars.escapeExpression(url);
    const displayUrl = escapedUrl.replace(/.*?:\/\//g, '');
    const wrappedUrl = `<a href="${escapedUrl}">${displayUrl}</a>`;
    return new handlebars.SafeString(wrappedUrl);
  },

  wrapMail: function (address) {
    const wrappedAddress = '<a href="mailto:' + address + '">' + address + "</a>";
    return new handlebars.SafeString(wrappedAddress);
  },

  formatAddress: function (address, city, region, postalCode, countryCode) {
    let addressList = addressFormat({
      address: address,
      city: city,
      subdivision: region,
      postalCode: postalCode,
      countryCode: countryCode
    });
    return addressList.join('<br/>');
  },

  formatDate: function (date) {
    if (moment(date).isValid())
    {
      return moment(date).format('MMM YYYY');
    }
    else return "Present";
  },

  even: function (index) {
    return index % 2 === 0;
  },

  odd: function (index) {
    return index % 2 !== 0;
  },

  length: function (array) {
    return array.length;
  }
});

function render(resume) {
  let dir = __dirname,
    css = fs.readFileSync(dir + '/style.css', 'utf-8'),
    resumeTemplate = fs.readFileSync(dir + '/resume.hbs', 'utf-8');

  let Handlebars = handlebarsWax(handlebars);

  Handlebars.partials(dir + '/views/**/*.{hbs,js}');
  Handlebars.partials(dir + '/partials/**/*.{hbs,js}');

  return Handlebars.compile(resumeTemplate)({
    css: css,
    resume: resume
  });
}

module.exports = {
  render: render,
  pdfRenderOptions: {
    format: 'A4',
    mediaType: 'print',
  },
};
