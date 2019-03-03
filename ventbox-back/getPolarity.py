import pandas as pd
import re

def getPolarity(text):
    pol = (pd.read_csv("vader_lexicon.txt", delimiter="\t", header=None).rename
            (index=str, columns={0: 'sent', 1:'polarity'})
            [['sent', 'polarity']].set_index('sent'))

    # Remove the punctuation
    punct_re = r'[^a-zA-Z\s0-9]'
    text = re.sub(punct_re, " ", text)

    # Lowercase all characters in text
    text = text.lower()

    polarity_sum = 0
    for word in text.split():
        if word in (pol.index.values):
            polarity_sum += pol.loc[word]['polarity']

    return polarity_sum
