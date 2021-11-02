export interface IReviewerData {
    id: string;
    name: string;
    isVerified: boolean;
    isDistributor: boolean;
    reviewing: string;
    ratingCount: number;
    date: string;
    title: string;
    reviewComment: string;
}

export const ReviewerData: IReviewerData[] = [
  {
    id: 'rd1',
    name: 'Joanna K.',
    isVerified: false,
    isDistributor: true,
    reviewing: 'Metallic Plum LipSense',
    ratingCount: 4,
    date: 'September 19, 2021',
    title: 'Best Product Ever!',
    reviewComment:
      '1 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
  {
    id: 'rd2',
    name: 'Joanna K.',
    isVerified: false,
    isDistributor: true,
    reviewing: 'Metallic Plum LipSense',
    ratingCount: 2,
    date: 'September 19, 2021',
    title: 'Best Product Ever!',
    reviewComment:
      '2 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
  {
    id: 'rd3',
    name: 'Joanna K.',
    isVerified: false,
    isDistributor: true,
    reviewing: 'Metallic Plum LipSense',
    ratingCount: 3.5,
    date: 'September 19, 2021',
    title: 'Best Product Ever!',
    reviewComment:
      '3 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
  {
    id: 'rd4',
    name: 'Joanna K.',
    isVerified: false,
    isDistributor: true,
    reviewing: 'Metallic Plum LipSense',
    ratingCount: 3.5,
    date: 'September 19, 2021',
    title: 'Best Product Ever!',
    reviewComment:
      '4 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
  {
    id: 'rd5',
    name: 'Joanna K.',
    isVerified: false,
    isDistributor: true,
    reviewing: 'Metallic Plum LipSense',
    ratingCount: 3.5,
    date: 'September 19, 2021',
    title: 'Best Product Ever!',
    reviewComment:
      '5 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
];
