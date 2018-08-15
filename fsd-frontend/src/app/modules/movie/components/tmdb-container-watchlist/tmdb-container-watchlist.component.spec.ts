import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbContainerWatchlistComponent } from './tmdb-container-watchlist.component';

describe('TmdbContainerWatchlistComponent', () => {
  let component: TmdbContainerWatchlistComponent;
  let fixture: ComponentFixture<TmdbContainerWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdbContainerWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbContainerWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
