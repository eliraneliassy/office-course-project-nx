import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'office-course-project2-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

  @Input() text: string = '';
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
}
