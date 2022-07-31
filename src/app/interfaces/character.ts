export interface Character {
    name: string;
    gender: 'man' | 'woman' | 'nonbinary';
    occupation: string;
    age: number;
    adjectives: string[];
}
