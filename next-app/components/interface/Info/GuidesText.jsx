/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BookOpenIcon, KeyIcon, SwatchIcon } from '@heroicons/react/20/solid';

function GuidesText() {
  return (
    <div className="mb-5">
      {/* General Tips */}
      <p className="info-subheader mb-1">General Tips</p>
      <p className="info-body">
        If you're search responses are too short, vague, or off topic, try the
        following:
      </p>
      <ul className="info-body pl-5">
        <li className="" type="square">
          Simply retry the search
        </li>
        <li className="py-1" type="square">
          Check your spelling and grammar
        </li>
        <li className="" type="square">
          Make sure your search is scoped correctly. For instance, searching
          "comparative fault" versus "pure comparative fault" returns different
          responses.
        </li>
      </ul>
      {/* Explain */}
      <div className="info-head-container">
        <p className="info-subheader">Explain</p>
        <BookOpenIcon className="info-icon" />
      </div>
      <p className="info-body">
        Explain mode returns a lengthy, broad explanation of a concept, term, or
        phrase. Responses typically include the relevant history and philosophy
        for a given input, as well as its legal significance.
      </p>
      <p className="info-body">
        <strong>Use this mode</strong> when you come across something new or
        that you need singificant context on. Try searching for "Habeus Corpus"
        to see Explain mode at its best.
      </p>
      <p className="info-body">
        <strong>Speed: </strong> Slow. Searches typically finish in 8-15
        seconds.
      </p>
      {/* Define */}
      <div className="info-head-container">
        <p className="info-subheader">Define</p>
        <KeyIcon className="info-icon" />
      </div>
      <p className="info-body">
        Define mode returns a concise legal definition of a concept, term, or
        phrase.
      </p>
      <p className="info-body">
        <strong>Use this mode</strong> when you need to confirm what you mostly
        remember or just get a quick refresher.
      </p>
      <p className="info-body">
        <strong>Speed:</strong> Fast! Searches finish in 1-5 seconds.
      </p>
      {/* Example */}
      <div className="info-head-container">
        <p className="info-subheader">Example</p>
        <SwatchIcon className="info-icon" />
      </div>
      <p className="info-body">
        Example mode returns three examples of a specific concept, term, or
        phrase.
      </p>
      <p className="info-body">
        <strong>Note: </strong> This mode works best for concepts that
        explicitly involves peoples or other legal entities, and that have
        variations, exceptions, and/or nuances. For instance, the tort of
        Battery always involves specific people and can occur in a wide variety
        of situations and contexts. So, Example mode handles it well.
      </p>
      <p className="info-body">
        <strong>Use this mode</strong> when you want to see hypotheticals on how
        a concept works or when it might apply. The model is great at generating
        unique situations. Also, don't be afraid to repeat this type of search;
        responses can vary greatly, and it a concept often has more than three
        relevant examples.
      </p>
      <p className="info-body">
        <strong>Speed:</strong> Kinda fast. Searches typically finish in 3-7
        seconds.
      </p>
    </div>
  );
}

export default GuidesText;
