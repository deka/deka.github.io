import fs from 'fs'

(function () {
    var html = fs.readFileSync('./public/resume.html', 'utf8')
    var result = html.replace(/\/\* Layouts \*\//g,'\.endDate { padding-right: 10px; }')
                    .replace(/padding-top: 20px;/g,'padding-top: 40px;')
                    .replace(/box-shadow: 0 1px 10px rgba\(0, 0, 0, 0\.5\);/g, '')
                    .replace(/border-top: 10px solid #56817A;/g, '')
                    .replace(/blockquote {/g,`li {
    font-size: 11px; }

    ul:not(.minimal):not(.two-column) li:empty {
        list-style-type:" ";}

    ul:not(.minimal):not(.two-column) li:last-child {
        list-style-type:"\\27AE";}
        
    blockquote {`);
    fs.writeFileSync('./public/resume.html', result, 'utf8')
})()