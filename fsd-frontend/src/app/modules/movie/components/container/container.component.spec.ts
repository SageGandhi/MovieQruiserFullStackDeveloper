import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ContainerComponent } from './container.component';
import { TmdbMovieService } from '../../service/tmdb-movie.service';
import {MaterialModule} from '../../../material/material.module';

describe('ContainerComponent:', () => {
	let component: ContainerComponent;
	let fixture: ComponentFixture<ContainerComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContainerComponent],
			imports: [HttpModule, RouterTestingModule,MaterialModule],
			providers: [TmdbMovieService]
		}).compileComponents();
	}));
	beforeEach(async(() => {
		fixture = TestBed.createComponent(ContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('ContainerComponent Is Truthy', () => {
		expect(component).toBeTruthy();
	});
})