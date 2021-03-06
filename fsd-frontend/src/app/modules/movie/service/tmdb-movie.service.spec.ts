import { Injectable } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, RequestMethod, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TmdbMovieService } from './tmdb-movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';

describe('TmdbMovieService:', () => {
  let service: TmdbMovieService;
  let httpMock: HttpTestingController;
  let response: any = {
    page: 1,
    total_results: 34,
    total_pages: 2,
    results: [
      {
        vote_count: 8973,
        id: 672,
        video: false,
        vote_average: 7.6,
        title: "Harry Potter and the Chamber of Secrets",
        popularity: 30.652,
        poster_path: "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
        original_language: "en",
        original_title: "Harry Potter and the Chamber of Secrets",
        genre_ids: [
          12,
          14,
          10751
        ],
        backdrop_path: "/2grHB4caPBmOyDW9x7NAwldtk8Y.jpg",
        adult: false,
        overview: "Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks.",
        release_date: "2002-11-13"
      },
      {
        vote_count: 10650,
        id: 671,
        video: false,
        vote_average: 7.7,
        title: "Harry Potter and the Philosopher's Stone",
        popularity: 36.034,
        poster_path: "/dCtFvscYcXQKTNvyyaQr2g2UacJ.jpg",
        original_language: "en",
        original_title: "Harry Potter and the Philosopher's Stone",
        genre_ids: [
          12,
          14,
          10751
        ],
        backdrop_path: "/dug34qm7BSnC1AVwtuQsGDFxxbG.jpg",
        adult: false,
        overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
        release_date: "2001-11-16"
      },
      {
        vote_count: 8112,
        id: 767,
        video: false,
        vote_average: 7.6,
        title: "Harry Potter and the Half-Blood Prince",
        popularity: 25.488,
        poster_path: "/bFXys2nhALwDvpkF3dP3Vvdfn8b.jpg",
        original_language: "en",
        original_title: "Harry Potter and the Half-Blood Prince",
        genre_ids: [
          12,
          14,
          10751
        ],
        backdrop_path: "/kRyojLYtWPsBKfDhphhhl1FdM5a.jpg",
        adult: false,
        overview: "As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past.",
        release_date: "2009-07-07"
      },
      {
        vote_count: 8541,
        id: 674,
        video: false,
        vote_average: 7.7,
        title: "Harry Potter and the Goblet of Fire",
        popularity: 21.913,
        poster_path: "/6sASqcdrEHXxUhA3nFpjrRecPD2.jpg",
        original_language: "en",
        original_title: "Harry Potter and the Goblet of Fire",
        genre_ids: [
          12,
          14,
          10751
        ],
        backdrop_path: "/gzKW3emulMxIHzuXxZoyDB1lei9.jpg",
        adult: false,
        overview: "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
        release_date: "2005-11-16"
      },
      {
        vote_count: 8360,
        id: 675,
        video: false,
        vote_average: 7.5,
        title: "Harry Potter and the Order of the Phoenix",
        popularity: 20.605,
        poster_path: "/4YnLxYLHhT4UQ8i9jxAXWy46Xuw.jpg",
        original_language: "en",
        original_title: "Harry Potter and the Order of the Phoenix",
        genre_ids: [
          12,
          14,
          10751,
          9648
        ],
        backdrop_path: "/gGt4ePOhD8ilxd3FYhKB06L2CyG.jpg",
        adult: false,
        overview: "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed 'Dumbledore's Army' – to defend themselves against the dark arts.",
        release_date: "2007-06-28"
      },
      {
        vote_count: 8884,
        id: 673,
        video: false,
        vote_average: 7.8,
        title: "Harry Potter and the Prisoner of Azkaban",
        popularity: 22.933,
        poster_path: "/jUFjMoLh8T2CWzHUSjKCojI5SHu.jpg",
        original_language: "en",
        original_title: "Harry Potter and the Prisoner of Azkaban",
        genre_ids: [
          12,
          14,
          10751
        ],
        backdrop_path: "/wUpBH6RIH4uOiWoPjj8MKUemu9F.jpg",
        adult: false,
        overview: "Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict, Sirius Black – and turns to sympathetic Professor Lupin for help.",
        release_date: "2004-05-31"
      },
      {
        vote_count: 9003,
        id: 12445,
        video: false,
        vote_average: 8,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        popularity: 25.358,
        poster_path: "/fTplI1NCSuEDP4ITLcTps739fcC.jpg",
        original_language: "en",
        original_title: "Harry Potter and the Deathly Hallows: Part 2",
        genre_ids: [
          10751,
          14,
          12
        ],
        backdrop_path: "/6n0DAcyjTHS6888mt8U9ZsLy9nR.jpg",
        adult: false,
        overview: "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
        release_date: "2011-07-07"
      },
      {
        vote_count: 8349,
        id: 12444,
        video: false,
        vote_average: 7.7,
        title: "Harry Potter and the Deathly Hallows: Part 1",
        popularity: 24.079,
        poster_path: "/maP4MTfPCeVD2FZbKTLUgriOW4R.jpg",
        original_language: "en",
        original_title: "Harry Potter and the Deathly Hallows: Part 1",
        genre_ids: [
          12,
          14,
          10751
        ],
        backdrop_path: "/8YA36faYlkpfp6aozcGsqq68pZ9.jpg",
        adult: false,
        overview: "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
        release_date: "2010-10-17"
      },
      {
        vote_count: 36,
        id: 389593,
        video: false,
        vote_average: 7.5,
        title: "Severus Snape and the Marauders",
        popularity: 2.468,
        poster_path: "/gqhtgXFUrSbkrphkP7vJOdO6fww.jpg",
        original_language: "en",
        original_title: "Severus Snape and the Marauders",
        genre_ids: [
          12,
          18,
          14,
          9648
        ],
        backdrop_path: "/gfu8uEzPUMb0qKouwSEZ9FcetwO.jpg",
        adult: false,
        overview: "Four friends celebrate at a bar graduating Hogwarts and contemplate their future, when an old rival arrives. Knowing what side Severus Snape will fight in the war, James Potter and The Marauders confront Snape for the final time.",
        release_date: "2016-03-01"
      },
      {
        vote_count: 26,
        id: 459643,
        video: false,
        vote_average: 7.2,
        title: "Le Maitre de la Mort",
        popularity: 1.705,
        poster_path: "/iGnxSiMx1EQ4wI2fEKj1rK3j4mp.jpg",
        original_language: "fr",
        original_title: "Le Maitre de la Mort",
        genre_ids: [
          14
        ],
        backdrop_path: "/l9cKLSPM3dNUQnVKrE5z6MTsked.jpg",
        adult: false,
        overview: "In the 1940s, Muggles clashed in a violent world war, but in the world of wizards a much greater threat, hidden in the shadows since its birth, is about to sow fear and death. From the London shallows to the Ministry of Magic, no one knows the name of the evil that rages in the shadows. Elyana Ogden, recently certified auror, is entrusted with an investigation into strange series of murders. She does not suspect that her path will lead her to meet the most dangerous dark lord of all time.",
        release_date: "2016-10-31"
      },
      {
        vote_count: 14,
        id: 459697,
        video: false,
        vote_average: 6.6,
        title: "The Greater Good - Harry Potter Fan Film",
        popularity: 1.583,
        poster_path: "/uPfWON5xIFSOgTaHdW99BlLEiA2.jpg",
        original_language: "en",
        original_title: "The Greater Good - Harry Potter Fan Film",
        genre_ids: [
          14,
          28,
          12
        ],
        backdrop_path: "/fs4oMKsrDLgO95GBphG5OCgTHYA.jpg",
        adult: false,
        overview: "The tragedy and curse of a family. A climactic duel with a dark and dangerous wizard. This is the moment that changed the fate of Albus, Aberforth, and Ariana Dumbledore forever.",
        release_date: "2013-12-03"
      },
      {
        vote_count: 3,
        id: 116972,
        video: false,
        vote_average: 5.3,
        title: "Discovering the Real World of Harry Potter",
        popularity: 1.276,
        poster_path: "/8XjQmztBzBb2EgrUBnIEF9fdBGC.jpg",
        original_language: "en",
        original_title: "Discovering the Real World of Harry Potter",
        genre_ids: [
          10751,
          99
        ],
        backdrop_path: null,
        adult: false,
        overview: "Explore the myths and legends that inhabit the real world of Harry Potter. Follow award-winning documentary filmmakers as they offer insights to witches, wizards, Greek gods, ancient Celts, ghosts, magical creatures, alchemy, and ancient spells. Narrated by British actor Hugh Laurie, this fascinating documentary brings new dimensions to the historical and scientific world behind the Harry Potter series.",
        release_date: "2001-12-10"
      },
      {
        vote_count: 2,
        id: 483898,
        video: true,
        vote_average: 9,
        title: "50 Greatest Harry Potter Moments",
        popularity: 0.745,
        poster_path: "/ycPuj1fbbzdVzKPNUh8uBL9j4tZ.jpg",
        original_language: "en",
        original_title: "50 Greatest Harry Potter Moments",
        genre_ids: [
          99
        ],
        backdrop_path: null,
        adult: false,
        overview: "To mark the release two weeks ago of the eighth and final movie in the series, Robbie Coltrane narrates a countdown of the movie franchise's best moments. From Harry's first meeting with Ron and Hermione aboard the Hogwarts Express through to magical mysteries.",
        release_date: "2011-07-27"
      },
      {
        vote_count: 9,
        id: 482408,
        video: false,
        vote_average: 6.1,
        title: "Harry Potter - A History Of Magic",
        popularity: 0.916,
        poster_path: "/tEbdRAYmis6YdqNFLU1dHMPl7u4.jpg",
        original_language: "en",
        original_title: "Harry Potter - A History Of Magic",
        genre_ids: [
          99,
          14,
          36
        ],
        backdrop_path: "/mjCYpJXCBYDZgMr1U1KZcFgFDfC.jpg",
        adult: false,
        overview: "A thrilling journey through legends, belief and folklore, this film goes behind the scenes with the British Library as they search to tell that story through objects in their collection, in an ambitious new exhibition: Harry Potter: A History Of Magic. J.K. Rowling, who is lending unseen manuscripts, drawings and drafts from her private archives (which will sit alongside treasures from the British Library, as well as original drafts and drawings from Jim Kay) talks about some of the personal items she has lent to the exhibition and gives new insight into her writing, looking at some of the objects from the exhibition that have fired her imagination.",
        release_date: "2017-10-28"
      },
      {
        vote_count: 17,
        id: 376816,
        video: false,
        vote_average: 7.4,
        title: "Creating The World of Harry Potter, Part 1: The Magic Begins",
        popularity: 1.005,
        poster_path: "/5KiMGwcO95vldDpitep9PR7duYn.jpg",
        original_language: "en",
        original_title: "Creating The World of Harry Potter, Part 1: The Magic Begins",
        genre_ids: [
          99
        ],
        backdrop_path: null,
        adult: false,
        overview: "The magic begins. The choices, the breakthroughs, the early decisions that impacted all the films are explored here via rare footage, cast and crew reminiscences and more. Learn about the extensive search by producer David Heyman and director Chris Columbus for the perfect actors to portray Harry, Ron and Hermione and see the earliest meeting of Daniel Radcliffe, Rupert Grint and Emma Watson. Be on the scene as imagination and know-how combine to create a look that's distinctly wizardly. From details tiny (what about Hermione's buckteeth?) to huge (Quidditch, anyone?), this is the fun and fascinating opening of a whole new portal into Harry's world. Begin the magic.",
        release_date: "2009-11-17"
      },
      {
        vote_count: 1,
        id: 383769,
        video: false,
        vote_average: 6,
        title: "Creating the World of Harry Potter, Part 2: Characters",
        popularity: 0.472,
        poster_path: "/gGzLMbAXe6p2Ugtj8Ot5Zd0uelX.jpg",
        original_language: "en",
        original_title: "Creating the World of Harry Potter, Part 2: Characters",
        genre_ids: [
          99
        ],
        backdrop_path: null,
        adult: false,
        overview: "“We really do look at the story and characters first,” producer David Heyman says. “That's the heart and that's the soul of the film.” And that's the heart and soul of this incisive, decade-spanning exploration of how the series' actors bring the beloved Harry Potter characters to life. Discover which parts of the J.K. Rowling books helped Daniel Radcliffe, Rupert Grint, Emma Watson and more stars make their roles leap from page to screen. See screen tests, including Evanna Lynch (Luna Lovegood) and Jessie Cave (Lavender Brown) working with the established stars. Learn why so many of Britain's acting greats wanted to be part of Harry Potter's world...and which ones became mentors to the young stars. Share each director's vision as you watch Daniel, Rupert and Emma grow up with Harry, Ron and Hermione. Your journey into Harry’s world continues.",
        release_date: "2009-12-08"
      },
      {
        vote_count: 0,
        id: 500008,
        video: false,
        vote_average: 0,
        title: "Harry Potter: The Making of Diagon Alley",
        popularity: 0.25,
        poster_path: null,
        original_language: "en",
        original_title: "Harry Potter: The Making of Diagon Alley",
        genre_ids: [],
        backdrop_path: null,
        adult: false,
        overview: "An inside look into the creation of Universal Studio's Diagon Alley attraction.",
        release_date: ""
      },
      {
        vote_count: 2,
        id: 109004,
        video: false,
        vote_average: 5.3,
        title: "The Seeker's Guide to Harry Potter",
        popularity: 0.116,
        poster_path: "/skMkvsUisKC6Ona9pn0ilws4oHz.jpg",
        original_language: "en",
        original_title: "The Seeker's Guide to Harry Potter",
        genre_ids: [
          99
        ],
        backdrop_path: null,
        adult: false,
        overview: "In this documentary, Dr. Geo Trevarthen uses psychology, theology and other disciplines to explore the mystical world of J.K. Rowling's Harry Potter novels, giving fans a deeper appreciation for the symbolism and magic in the books. Looking at the entire series, Trevarthen pays special attention to how readers' lives may intersect with shamanism and other real-world mystical traditions that echo through the halls of Hogwarts.",
        release_date: "2010-11-23"
      },
      {
        vote_count: 2,
        id: 430481,
        video: false,
        vote_average: 5.5,
        title: "Harry Potter: Witchcraft Repackaged",
        popularity: 0.073,
        poster_path: "/xjve882VGrNbyPZDcR7QdapjMaq.jpg",
        original_language: "en",
        original_title: "Harry Potter: Witchcraft Repackaged",
        genre_ids: [
          99
        ],
        backdrop_path: null,
        adult: false,
        overview: "Does Witchcraft/Wicca actually have power? If so, what is it's source? Does the Harry Potter series ' presentation of child-friendly Witchcraft make it's philosophy any more acceptable just because it is packaged as \"children\'s fantasy literature\"?",
        release_date: "2001-01-01"
      },
      {
        vote_count: 1,
        id: 383770,
        video: false,
        vote_average: 7,
        title: "Creating the World of Harry Potter, Part 3: Creatures",
        popularity: 0.083,
        poster_path: "/oIDCV9OJDPrGRhXD0KyF6JjVvK8.jpg",
        original_language: "en",
        original_title: "Creating the World of Harry Potter, Part 3: Creatures",
        genre_ids: [
          99
        ],
        backdrop_path: null,
        adult: false,
        overview: "Soar on the back of Buckbeak. Battle a Hungarian Horntail. Trace Voldemort’s terrifying transformation from grotesque infant-like creature to Dark Lord. Fascinating footage lets you experience the Harry Potter world of creatures through new eyes with this revealing look at a new group of wizards: the artists who create the monsters and marvels. Roam the Creature Shop, where actors turn into beasts and sketches turn into animatronic wonders. Join Daniel Radcliffe, Rupert Grint and Emma Watson as they share stories about acting opposite everything from tiny computer-generated pixies to a four-ton mechanical spider (guess which young star is really afraid of spiders). New discoveries and new revelations all make your journeys into Harry’s world even more thrilling!",
        release_date: "2010-10-19"
      }
    ]
  };
  let movieWithComment:Movie={
    "id": 299536,
    "vote_count": 6836,
    "vote_average": 8.3,
    "title": "Avengers: Infinity War",
    "popularity": 309.417,
    "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "release_date": "2018-04-25"
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpModule, RouterTestingModule, HttpClientTestingModule],
      providers: [TmdbMovieService, { provide: XHRBackend, useClass: MockBackend }]
    }).compileComponents();
    service = TestBed.get(TmdbMovieService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Can Instantiate Service When Inject Service',
    inject([TmdbMovieService], (service: TmdbMovieService) => {
      expect(service instanceof TmdbMovieService).toBe(true);
    }));

  it('Can Provide The MockBackend As XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('XHRBackend Should Be Provided');
    }));

  it('Can Provide Movie By SearchText', inject([HttpClient, HttpTestingController],
    (http: HttpClient, httpMock: HttpTestingController) => {
      let url = 'https://api.themoviedb.org/3/search/movie?api_key=5fdf2806647c21ec8d2d34b7e4e6b0a1&language=en-US&page=1&include_adult=false&query=Harry Potter';
      service.searchByText('Harry Potter').subscribe(response => { });
      const req = httpMock.expectOne(request => request.url === url);
      httpMock.verify();
    }));

  it("Can Provide Movie By SearchText With Response", inject([TmdbMovieService, XHRBackend], (tmdbMovieService, mockBackend) => {
    response['results'].map(movieTemp => {
      movieTemp['poster_path'] = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${movieTemp['poster_path']}`;
      return movieTemp;
    });
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(response) })));
    });
    service.searchByText('Harry Potter').subscribe(results => { expect(results).toEqual(response); })
  }));

  it('Can updateMovieFromWatchList Movie', inject([HttpClient, HttpTestingController],
    (http: HttpClient, httpMock: HttpTestingController) => {
      let url = 'http://localhost:8080/api/v1/movie';
      service.updateMovieFromWatchList(movieWithComment).subscribe(response => { });
      const req = httpMock.expectOne(request => request.url === `${url}/${movieWithComment.id}`);
      expect(req.request.headers.has('Content-Type'));
      expect(req.request.method).toEqual('PUT');
      httpMock.verify();
    }));

  it("Can updateMovieFromWatchList Movie With Response", inject([TmdbMovieService, XHRBackend], (tmdbMovieService, mockBackend) => {
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(movieWithComment) })));
    });
    service.updateMovieFromWatchList(movieWithComment).subscribe(results => {
      expect(results).toEqual(JSON.stringify(movieWithComment));
    })
  }));
  //Similar Test Cases Required For Others
});
