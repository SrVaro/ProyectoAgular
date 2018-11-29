import { TestBed } from '@angular/core/testing';

import { ServicioMenuService } from './servicio-menu.service';

describe('ServicioMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioMenuService = TestBed.get(ServicioMenuService);
    expect(service).toBeTruthy();
  });
});
