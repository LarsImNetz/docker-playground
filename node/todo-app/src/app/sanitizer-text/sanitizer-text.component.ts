import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SanitizeService } from './sanitize.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sanitizer-text',
  templateUrl: './sanitizer-text.component.html',
  styleUrls: ['./sanitizer-text.component.css'],
})
export class SanitizerTextComponent implements OnInit {
  public unsanitizedLabel: SafeHtml;

  @Input()
  public name: string;

  @Input()
  public text: string;

  constructor(
    private readonly sanitizeService: SanitizeService,
    private readonly sanitizer: DomSanitizer,
  ) {

  }

  ngOnInit() {
    if (!this.name) {
      throw new Error('Please provide a name for the SanitizerText component!');
    }
    this.name = this.sanitizeService.sanitizeValue(this.name);

    this.unsanitizedLabel = this.sanitizer.bypassSecurityTrustHtml(this.text);
  }

}
