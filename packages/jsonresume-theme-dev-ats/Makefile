HBS_TEMPLATES = $(sort $(wildcard partials/** views/** resume.hbs ))

all: resume.png

resume.json:
	cp sample-resume.json resume.json

resume.pdf: resume.json index.js  $(HBS_TEMPLATES)
	npm run export

resume.png: resume.pdf
	pdftoppm -png resume.pdf > resume.png
