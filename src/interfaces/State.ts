export interface State {
  chars: any[];
  show: number;
  charEpisodes: any[];
  filters: {
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string
  }
}