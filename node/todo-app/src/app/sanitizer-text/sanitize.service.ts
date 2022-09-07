export class SanitizeService {

  public sanitizeValue(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

}
