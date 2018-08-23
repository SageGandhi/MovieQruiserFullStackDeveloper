import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './modules/material/material.module';

describe('AppComponent:', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpModule,
        MaterialModule
      ],
      providers:[],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('Should Create The App', async(() => {
    expect(component).toBeTruthy();
  }));
  it('Should Render Application Name In A Span Tag', async(() => {
    fixture.detectChanges();//Application Name Will Be Detected
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('MovieCruiser');
  }));
});
