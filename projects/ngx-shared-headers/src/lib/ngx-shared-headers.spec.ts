import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSharedHeaders } from './ngx-shared-headers';

describe('NgxSharedHeaders', () => {
  let component: NgxSharedHeaders;
  let fixture: ComponentFixture<NgxSharedHeaders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSharedHeaders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSharedHeaders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
