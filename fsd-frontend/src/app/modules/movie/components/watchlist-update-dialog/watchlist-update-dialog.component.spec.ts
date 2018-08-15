import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistUpdateDialogComponent } from './watchlist-update-dialog.component';

describe('WatchlistUpdateDialogComponent', () => {
  let component: WatchlistUpdateDialogComponent;
  let fixture: ComponentFixture<WatchlistUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistUpdateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
