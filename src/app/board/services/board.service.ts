import {Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SocketService } from "src/app/shared/services/socket.service";
import { BoardInterface } from "src/app/shared/types/board.interface";
import { SocketEventsEnum } from "src/app/shared/types/socketEvents.enum";

@Injectable()
export class BoardService {
    board$ = new BehaviorSubject<BoardInterface | null>(null);

    constructor(private socketService: SocketService){}

    setBoard(board: BoardInterface): void {
        this.board$.next(board);
    }

    leaveBoard(boardId: string): void {
        this.board$.next(null);
        this.socketService.emit(SocketEventsEnum.boardsLeave, {boardId})
    }

}