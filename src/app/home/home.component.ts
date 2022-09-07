import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HOMEComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() {}

  ngOnInit() {}
}
