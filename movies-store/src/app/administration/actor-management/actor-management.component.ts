import { Component, OnInit } from '@angular/core';
import { Actor } from 'models/actor.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActorDetailsComponent } from 'src/app/actor/actor-details/actor-details.component';

@Component({
  selector: 'app-actor-management',
  templateUrl: './actor-management.component.html',
  styleUrls: ['./actor-management.component.scss']
})
export class ActorManagementComponent implements OnInit {

  public actors: Actor[] = [];
  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }

  actorDetalis(actor: Actor) {

  }

  addActor() {
    const initialState = {
      isAdmin: true,
    };
    this.modalService.show(ActorDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState });
  }
}
