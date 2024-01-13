import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	private isOpen = false;
	private dropdownClass = 'open';

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	@HostListener('document:click', ['$event'])
	onClickOutside(event: Event) {
		if (!this.el.nativeElement.contains(event.target)) {
			this.isOpen = false;
			this.renderer.removeClass(
				this.el.nativeElement,
				this.dropdownClass
			);
		}
	}

	@HostListener('click') onClick() {
		this.isOpen = !this.isOpen;
		this.toggleDropdown();
	}

	private toggleDropdown() {
		if (this.isOpen) {
			this.renderer.addClass(this.el.nativeElement, this.dropdownClass);
		} else {
			this.renderer.removeClass(
				this.el.nativeElement,
				this.dropdownClass
			);
		}
	}
}
