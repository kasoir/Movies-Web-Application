import { Component, OnInit } from '@angular/core';
import { Actor, getDefaultActor } from 'models/actor.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

  public data: any;
  public actor: Actor = getDefaultActor();
  public isAdmin: boolean =false;
  public done = false;
  constructor(
    private actorService: ActorService,
    private messageService: MessageService,
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.actor = this.data;
    }
    this.done = true;
  }

  create = async () => {
    const result = await this.actorService.createActor(this.actor);
    if (result) {
      this.messageService.add({ summary: 'Success',sticky:false,life:2000,  detail: 'Added successfully...' });
      this.bsModalRef.hide();
    }
  }
  update = async () => {
    const result = await this.actorService.updateActor(this.actor);
    if (result) {
      this.messageService.add({ summary: 'Success',sticky:false,life:2000,  detail: 'Updated successfully...' });
      this.bsModalRef.hide();
    }
  }

}
