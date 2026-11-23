/* Free Citation Generator — English UI strings (based on CiteFast / MIT). */
(function (global) {
  'use strict';

  const I18N = {
    en: {
      _name: 'English',
      styleLabel: 'Style',
      langLabel: 'Language',
      themeTitle: 'Toggle light/dark theme',
      heroTitle: 'Your perfect citation in %s',
      heroHighlight: '3 seconds',
      heroSub:
        'Paste a <b>DOI</b>, <b>ISBN</b>, <b>URL</b> or the <b>title</b>. We fill in the rest and format it instantly.',
      searchPlaceholder: 'Paste a DOI, ISBN, URL or the title of the work…',
      clearTitle: 'Clear',
      manualToggle: 'or fill in the details manually',
      manualTypeLabel: 'Document type',
      manualBuild: 'Generate citation',
      previewHead: 'Preview',
      previewPlaceholder: 'Your citation will appear here. Paste a DOI, ISBN, URL or title above.',
      actCopy: '⧉ Copy with formatting',
      actCopyText: 'Copy text',
      actEdit: '✎ Edit',
      actAdd: '+ Add to my library',
      libHead: 'My library',
      exportLabel: 'Export all',
      exportFormat: 'Format…',
      clearLib: 'Clear',
      libEmpty:
        'You have not saved any references yet. Generate one above and click <b>“Add to my library”</b>. Everything stays in your browser.',
      footerMain:
        '<b>Free Citation Generator</b> · Runs 100% in your browser. We do not store your bibliographies on a server.',
      footerNote: 'APA 7 · MLA 9 · Chicago · IEEE · Vancouver · ABNT · BibTeX and RIS export',
      createdBy: 'Based on CiteFast by',
      openSource: 'Open source (MIT) at',
      privacyLink: 'Privacy',
      aboutLink: 'About',
      backHome: 'Free Citation Generator',
      trustLine: 'Open source engine · Browser-only · Nothing uploaded',
      bulkBtn: '⚡ Bulk mode',
      bulkTitle: 'Generate many citations at once',
      bulkSub: 'Paste a bibliography or a list of DOIs, or upload a PDF, Word or text file.',
      bulkPrivacy:
        'Your file is read entirely in your browser. Only identifiers are sent to public APIs to verify each reference.',
      bulkRigor:
        'We only auto-generate from verifiable identifiers — DOI, arXiv, PubMed (PMID) or ISBN.',
      bulkPastePh: 'Paste text, a reference list, or DOIs here…',
      bulkChoose: 'Choose file (PDF, Word, .txt)',
      bulkAnalyze: 'Extract & generate',
      bulkReading: 'Reading file locally…',
      bulkResolving: 'Verifying %n identifier(s)…',
      bulkFound: '%n verifiable reference(s) found',
      bulkNone: 'No verifiable identifiers (DOI, arXiv, PMID, ISBN) were found.',
      bulkUnverifiable:
        'References without DOI, arXiv, PMID or ISBN were not generated automatically.',
      bulkFailed: 'not resolved',
      bulkAddAll: 'Add all (%n) to my library',
      bulkClose: 'Close',
      bulkErr: 'Could not read the file.',
      bulkDocxUnsupported: 'This browser cannot open .docx here. Save as PDF or paste text instead.',
      copied: 'Copied!',
      added: 'Added ✓',
      alreadyIn: 'Already in your library',
      confirmClear: 'Empty your whole library? This cannot be undone.',
      needTitle: 'Add at least a title.',
      exportText: 'Text (.txt)',
      exportHtml: 'Formatted (.html)',
      exportJson: 'CSL-JSON (.json)',
      chips: {
        doi: 'DOI detected',
        isbn: 'ISBN detected',
        pmid: 'PMID detected',
        url: 'URL detected',
        query: 'Title search',
      },
      status: {
        loading: 'Searching…',
        found: 'Reference found.',
        foundMany: '%n matches — pick the correct one:',
        none: 'No results. Fill in the details manually.',
        error: 'Could not connect. Check the input or fill it in manually.',
      },
      warn: {
        noAuthor: 'Missing author.',
        noTitle: 'Missing title.',
        noYear: 'Missing publication year.',
        noJournal: 'Missing journal name.',
        noPublisher: 'Missing publisher.',
        apaDoi: 'APA 7 recommends including the DOI.',
        noUrl: 'Missing page URL.',
      },
      types: {
        'article-journal': 'Journal article',
        book: 'Book',
        chapter: 'Book chapter',
        'paper-conference': 'Conference paper',
        thesis: 'Thesis / Dissertation',
        report: 'Technical report',
        webpage: 'Web page',
        dataset: 'Data set',
        article: 'Article / Preprint',
      },
      fields: {
        author: 'Authors (one per line: Surname, Name)',
        title: 'Title',
        container: 'Journal / Book / Site',
        editor: 'Editors (one per line)',
        year: 'Year',
        volume: 'Volume',
        issue: 'Issue',
        page: 'Pages (e.g. 12-34)',
        doi: 'DOI',
        edition: 'Edition',
        place: 'City',
        publisher: 'Publisher',
        isbn: 'ISBN',
        number: 'Report No.',
        url: 'URL',
      },
      faqHead: 'Frequently asked questions',
      faq: [
        {
          q: 'Is it free?',
          a: 'Yes, completely free. The site is supported by unobtrusive advertising.',
        },
        {
          q: 'Do you store my data?',
          a: 'No. Your library lives only in browser local storage. We have no accounts and no server copies of your bibliographies.',
        },
        {
          q: 'Can I trust the citations?',
          a: 'The engine follows each style closely, but source metadata can be imperfect. Always review the final result.',
        },
        {
          q: 'What if it cannot find my source?',
          a: 'Open <b>fill in the details manually</b> and enter the fields yourself.',
        },
        {
          q: 'Can I use Word, Zotero or LaTeX?',
          a: 'Copy with formatting for Word or Docs. Export <b>BibTeX</b> for LaTeX and <b>RIS</b> for Zotero or Mendeley.',
        },
        {
          q: 'Does it work offline?',
          a: 'Saved library and manual formatting work offline. Lookup needs the internet.',
        },
      ],
      styleGuideHead: 'Which citation style should I use?',
      styleGuideIntro:
        'There is no single best style — use what your instructor or journal requires.',
      styleGuideCols: { style: 'Style', field: 'Typical fields' },
      styleGuide: [
        { s: 'APA 7', f: 'Psychology, education, nursing, social sciences' },
        { s: 'MLA 9', f: 'Literature, languages, cultural studies' },
        { s: 'Chicago', f: 'History, art history, publishing' },
        { s: 'IEEE', f: 'Engineering, computer science' },
        { s: 'Vancouver', f: 'Medicine, health sciences' },
        { s: 'ABNT', f: 'Brazil — national standard' },
      ],
      styleGuideTip:
        '<b>When in doubt:</b> ask your instructor or target journal which style to use.',
    },
  };

  global.I18N = I18N;
  global.I18N_ORDER = ['en'];
  global.I18N_DETECT = () => 'en';
})(window);