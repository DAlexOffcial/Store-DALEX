import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'woman-section',
  templateUrl: './woman-section.component.html',
  styleUrls: ['./woman-section.component.css']
})
export class WomanSectionComponent {

  constructor(private elRef: ElementRef) { }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
