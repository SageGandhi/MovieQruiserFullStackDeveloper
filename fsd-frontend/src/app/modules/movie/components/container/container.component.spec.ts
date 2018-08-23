import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContainerComponent } from './container.component';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
import { MaterialModule } from '../../../material/material.module';
import { MovieModule } from 'src/app/modules/movie/movie.module';
import { ThumbnailComponent } from 'src/app/modules/movie/components/thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';

describe('ContainerComponent:', () => {
	let component: ContainerComponent;
	let fixture: ComponentFixture<ContainerComponent>;
	let service:TmdbMovieService;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContainerComponent, ThumbnailComponent],
			imports: [RouterTestingModule, MaterialModule,HttpClientModule],
			providers: [TmdbMovieService]
		}).compileComponents();
	}));
	beforeEach(async(() => {
		fixture = TestBed.createComponent(ContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		service = TestBed.get(TmdbMovieService);
	}));

	it('ContainerComponent Is Truthy', () => {
		expect(component).toBeTruthy();
	});
})