import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBulletinsReleaseComponent } from './news-bulletins-release.component';

describe('NewsBulletinsReleaseComponent', () => {
	let component: NewsBulletinsReleaseComponent;
	let fixture: ComponentFixture<NewsBulletinsReleaseComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ NewsBulletinsReleaseComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NewsBulletinsReleaseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
