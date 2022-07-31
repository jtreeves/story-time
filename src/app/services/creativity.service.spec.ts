import { TestBed } from '@angular/core/testing';
import { CreativityService } from './creativity.service';

describe('CreativityService', () => {
    let service: CreativityService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CreativityService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
