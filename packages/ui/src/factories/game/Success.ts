import { getMessage } from '@infinite/shared/src/services/vocabulary';

const SUCCESS_MESSSAGES_LENGTH = 9;

function getAllMessages(): string[] {
  const messages = [];

  for (let i = 1; i <= SUCCESS_MESSSAGES_LENGTH; i++) {
    messages.push(getMessage(`gameSuccessMessage${i}`));
  }

  return messages;
}

const WINNING_MESSAGES = getAllMessages();

export default class GameSuccessFactory {
  static getWinningMessage(): string {
    const index = Math.floor(Math.random() * WINNING_MESSAGES.length);

    return WINNING_MESSAGES[index - 1];
  }
}
