import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellRegular } from './shell-regular';

describe('ShellRegular', () => {
  let component: ShellRegular;
  let fixture: ComponentFixture<ShellRegular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellRegular]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShellRegular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
