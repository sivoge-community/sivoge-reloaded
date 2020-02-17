import {Component, OnDestroy, OnInit} from '@angular/core';
import {SessionService} from '../../../../../services/session.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AdminModalsService} from '../../../../../services/admin-modals.service';
import {ModalVotingSessionComponent} from '../../modals/modal-voting-session/modal-voting-session.component';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit, OnDestroy {

  public title = 'Sesión de votación';
  public session$: any[];
  public pagination: any;
  private sessionActive: any; /*TODO: Cambiar el tipo por su respectivo modelo*/
  private sessionState: boolean;
  private unsubscribe$ = new Subject<void>();
  private historiesLength: number;

  constructor(private sessionService: SessionService,
              private adminModalsService: AdminModalsService) {
    this.pagination = {page: 1, pageSize: 4 };
  }

  ngOnInit() {
    this.sessionState = this.sessionService.getSessionState();
    this.sessionActive = this.sessionService.getActiveSession();

    this.sessionService.getSessions()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(sessions => {
        this.session$ = sessions.data.reverse();
        this.historiesLength = sessions.data.length;
      });
  }

  openSessionModal(): void {
    this.adminModalsService.openSessionModal(ModalVotingSessionComponent);
  }

  /*Method to create a new session on click*/
  onNewSessionClick(): void {
    this.openSessionModal();
  }

  /*Method to download a pdf from any past session on click*/
  onSessionDownloadClick(): void {
    // *
  }

  /*Method to update the active session on click*/
  onUpdateSessionActiveClick(): void {
    // *
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

}
