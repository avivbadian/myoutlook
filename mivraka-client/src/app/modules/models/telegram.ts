import { Platform } from './platform';

export class Telegram {
    id: number;
    ner: number;
    body: string;
    subject: string;
    isSelected: boolean;
    isMarked: boolean;
}

export class TelegramDestination {
    logicalChannelName: string;
    platforms: Platform[];
}