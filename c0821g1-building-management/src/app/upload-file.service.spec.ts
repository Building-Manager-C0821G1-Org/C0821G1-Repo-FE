import { TestBed } from '@angular/core/testing';

import { UploadFileService } from './service/employee/upload-file.service';

describe('UploadFileService', () => {
  let service: UploadFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
