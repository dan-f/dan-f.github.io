webpackJsonp([0xc2ee893f9b48],{417:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Daniel Friedman"}},markdownRemark:{html:'<p>I\'ve been at <a href="https://www.recurse.com/">RC</a> for about four weeks at this point,\nand I\'m often thinking about how to frame the experience to someone.  It\'s an\neducational retreat for programmers with little structure; there are no\nteachers, and everyone works on whatever they want to.</p>\n<p>I\'ve been developing an intuition for how much effort to put into any given\ntask, for how long, and with what intensity.  What I\'ve found, perhaps\nobviously, is to do whatever you feel like, whenever you feel like, and to quit\nright when it gets boring.  It\'s a rare privilege to be able to drop everything\nfor three months and pursue whatever interests you.  Systems like RC replace\n"should"-motivated learning with "want"-motivated learning.</p>\n<p>So here\'s what I\'ve been up to over the last few weeks.</p>\n<h2>Audio</h2>\n<p>I like music, I like computers!  I like digital audio?  It\'s a bit complicated.</p>\n<p>I built a little <a href="https://github.com/dan-f/portaudio-rs-sine-wavetable">sine wave\noscillator</a> and a <a href="https://github.com/dan-f/portaudio-rs-sine-wavetable">delay\nline</a> in order to get my\nfeet wet with realtime audio.</p>\n<p>Here\'s what I learned in the process!</p>\n<ul>\n<li><a href="http://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing">Time stops for\nno-one</a>!\nDon\'t do IO-bound computation or work with nondeterministic running times on\nthe audio thread</li>\n<li>Caught up on my rusty operating systems/systems programming skills, including:\nscheduling, threads, syscalls, drivers, ELF binaries, and runtimes</li>\n<li>Learned a lot about <a href="https://www.rust-lang.org/">rust</a>.  There are a lot of\nfolks at RC right now that are knowledgeable with rust, and many more that are\nlearning.</li>\n</ul>\n<p>Then I started getting into the\n<a href="https://en.wikipedia.org/wiki/Fast_Fourier_transform">FFT</a> by way of\n<a href="http://www.musimathics.com/">Musimathics</a>, a really excellent book on the\nmathematics of audio by Gareth Loy.  It\'s super interesting, though I quickly\nrealized that I\'d need to brush up on some math before diving in (see <a href="https://en.wikipedia.org/wiki/Imaginary_number">imaginary\nnumbers</a>).  In practice, if you\nwant to make <a href="https://www.youtube.com/watch?v=F5hhFMSAuf4">bleeps</a> and\n<a href="https://www.youtube.com/watch?v=M9F3_GS0_70">bloops</a>, most DSP is done for you\nby <a href="https://supercollider.github.io/">runtimes</a> or lower-level\n<a href="https://github.com/PaulBatchelor/Soundpipe">libraries</a>.  What fundamentally\ninterests me in digital audio is making weird noises.  It turns out that\nlearning DSP algorithms can be a circuitous path to that goal.</p>\n<h2>Decentralization</h2>\n<p>Aside from the mathematical overhead involved in going deeper into digital\naudio, I noticed that the programming problems in that space weren\'t super\ninteresting to me.</p>\n<p>So I pivoted to another area of focus - decentralized systems.  I\'ve been\nstarting out by <a href="https://github.com/dan-f/blockchain">building my own\nblockchain</a>.  I\'m less interested in the\ncurrency use case and more interested in getting a peer-to-peer network of\ncomputers to agree on a notion of truth without needing special mediating\nparties.  And the problem of how to incentivize them to cooperate.</p>\n<p>I\'ll be surveying decentralized tech beyond the bitcoin blockchain, including\narchitectures like <a href="https://www.ethereum.org/">ethereum</a>\n<a href="https://ipfs.io/">ipfs</a>, <a href="https://datproject.org/">dat</a>, and\n<a href="https://scuttlebot.io/">scuttlebot</a>.  My primary interest is in how we can use\ndecentralization to replace the personal-data-as-store-of-value model of the\ncurrent social web.</p>',frontmatter:{title:"Week 4 at the Recurse Center",date:"June 12, 2018"}}},pathContext:{slug:"/blog/week-4-rc/"}}}});
//# sourceMappingURL=path---blog-week-4-rc-586e34066b0890ce9dd4.js.map