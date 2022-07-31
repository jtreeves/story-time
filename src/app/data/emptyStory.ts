import { EMPTY_CHARACTER } from './emptyCharacter';
import { Story } from '../interfaces/story';

export const EMPTY_STORY: Story = {
    mainCharacter: EMPTY_CHARACTER,
    supportingCharacter: EMPTY_CHARACTER,
    genre: 'comedy',
    actions: [],
    objects: [],
    content: ''
}
