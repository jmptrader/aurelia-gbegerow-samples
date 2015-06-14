import { inject, bindable } from 'aurelia-framework';


export class Theme {
	@bindable
	themes = [
		{ name: 'default', href: 'http://localhost:9000/jspm_packages/github/twbs/bootstrap@3.3.4/css/bootstrap.css' },
		{ name: 'cerulean', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/cerulean/bootstrap.min.css' },
		{ name: 'cosmo', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/cosmo/bootstrap.min.css' },
		{ name: 'cyborg', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/cyborg/bootstrap.min.css' },
		{ name: 'darkly', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/darkly/bootstrap.min.css' },
		{ name: 'flatly', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/flatly/bootstrap.min.css' },
		{ name: 'global', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/global/bootstrap.min.css' },
		{ name: 'journal', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/journal/bootstrap.min.css' },
		{ name: 'lumen', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/lumen/bootstrap.min.css' },
		{ name: 'paper', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/paper/bootstrap.min.css' },
		{ name: 'readable', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/readable/bootstrap.min.css' },
		{ name: 'sandstone', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/sandstone/bootstrap.min.css' },
		{ name: 'simplex', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/simplex/bootstrap.min.css' },
		{ name: 'slate', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/slate/bootstrap.min.css' },
		{ name: 'spacelab', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/spacelab/bootstrap.min.css' },
		{ name: 'superhero', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/superhero/bootstrap.min.css' },
		{ name: 'united', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/united/bootstrap.min.css' },
		{ name: 'yeti', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.4/yeti/bootstrap.min.css' },
	];

	@bindable currentTheme =this.themes["default"];


	currentThemeChanged(newvalue, oldvalue) {
		if (!oldvalue) return;
		
		let i, link_tag;
		let old = new RegExp(oldvalue, i);
		
		for (i = 0, link_tag = document.getElementsByTagName("link"); i < link_tag.length; i++) {
			if (link_tag[i].rel.match(/stylesheet/i) && link_tag[i].href.match(old)) {
				link_tag[i].href = newvalue;
				
				// todo: save to cookie/localstorage
				return;
			}
		}
	}
} 
