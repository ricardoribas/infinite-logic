import AbstractPlayInfo from '@infinite/shared/src/models/game/AbstractPlayInfo';

export default interface GameState<T extends AbstractPlayInfo> {
  update(playInfo: T): void;
}
