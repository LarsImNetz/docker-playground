import { inject, TestBed } from '@angular/core/testing';
import { SanitizeService } from './sanitize.service';

describe('SanitizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanitizeService],
    });
  });

  it('should strip all non-alphanumeric characters and convert everything to lowercase',
    inject([SanitizeService], (service: SanitizeService) => {
      expect(service.sanitizeValue('a sentence with spaces')).toBe('asentencewithspaces');
      expect(service.sanitizeValue('ÜÖÄ')).toBe('');
      expect(service.sanitizeValue('123 456')).toBe('123456');
    }));
});
