import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card/card.service';
import { RATINGS } from 'src/app/mockdata';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addGameCardForm!: FormGroup;
  ratings: { value: string; text: string }[] = RATINGS;
  constructor(
    private cardService: CardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.addGameCardForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      rating: new FormControl(),
      description: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      downloads: new FormControl(0, Validators.required),
      comingSoon: new FormControl(false, Validators.required),
    });
  }

  onSubmit() {
    if (this.addGameCardForm.valid) {
      this.cardService.addOne(this.addGameCardForm.value);
      this.router.navigate(['/', 'module-home', 'home', 'popular']);
    } else {
      this.addGameCardForm.reset();
    }
  }
}
