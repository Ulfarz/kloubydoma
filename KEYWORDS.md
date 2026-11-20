# Keyword universe — kloubydoma.cz

Source : Semrush Keyword Magic Tool (via RankerFox), base `cz`, 14 seeds, **1 198 mots-clés uniques**.
Export complet : `~/.hermes/data/rankerfox/bank_kloubydoma_cz.csv`.
Relevé du 20/11/2026. Volumes mensuels CZ, KD = difficulté Semrush.

## 1. Le constat qui commande tout le reste

- **Aucune marque du catalogue n'a de volume de recherche en Tchéquie.** `artizynt`,
  `flexosamine`, `trimoryn`, `trimology`, `nerve fresh`, `therawolf`, `dentavive`,
  `clairlite`, `derila` : 0 requête, 0 volume. Les pages produit existent pour le trafic
  direct des publicités du vendeur, pas pour Google.
- **Les 6 pages catégories visaient des requêtes à 0 volume** : « doplňky na hubnutí »,
  « doplňky na nervy », « doplňky na zuby », « doplňky na paměť », « UV sanitizer ».
  Un titre qui ne correspond à aucun bucket de requête réel ne peut pas être cliqué,
  même en position 1.
- **Les gros volumes de la niche ne sont pas servis par les produits vendus** : patchs
  minceur (1 900), pâtes dentifrices (1 300+), désinfectants liquides (2 400), antalgiques.
  Écrire des pages sur ces requêtes serait du doorway : le visiteur cherche un produit
  qu'on ne vend pas.

## 2. Univers retenu — pages qui ont le droit d'exister (OWN)

| Requête | Volume | KD | Page | Rôle |
|---|---|---|---|---|
| spalovač tuků | 2 900 | 18 | `/hubnuti/` | catégorie, comparaison 2 formats |
| prášky na hubnutí | 2 900 | 18 | `/hubnuti/` | H2 secondaire sur la même page |
| prášky na nervy | 320 | 24 | `/nervy/` | H2 secondaire |
| na nervy | 140 | 18 | `/nervy/` | catégorie |
| gel na klouby | 140 | 17 | `/klouby/` | catégorie |
| gel na bolest kloubů | 110 | 14 | `/klouby/` | H2 secondaire |
| na paměť | 110 | 20 | `/mozek/` | catégorie |

Règle appliquée : **une requête = un bucket = une page**. Deux pages ne visent jamais la
même requête (anti-cannibalisation par construction).

## 3. Marques — SUPPORT, pas SEO

`ArtiZynt gel`, `Flexosamine gel`, `Trimoryn`, `Trimology`, `Nerve Fresh`,
`TheraWolf Neuro Balm`, `Dentavive`, `ClairLite UV`, `Derila` : 0 volume CZ.
Ces pages restent en ligne (trafic direct, réassurance avant achat, conversion) mais
aucun budget de contenu ne doit partir dessus tant qu'une demande n'apparaît pas.

## 4. Refusé explicitement (et pourquoi)

| Requête | Volume | KD | Raison du refus |
|---|---|---|---|
| dezinfekce na ruce | 2 400 | 13 | produit liquide ; on vend un appareil UV |
| sanytol dezinfekce na prádlo | 3 600 | 18 | marque tierce, pas notre produit |
| bolest kolene | 2 900 | 22 | intention thérapeutique — le site ne fait aucun claim médical |
| bolest kloubů | 1 300 | 13 | idem |
| andílek na nervy | 2 900 | 25 | marque tierce (sirop au thym) |
| náplasti na hubnutí | 1 900 | 14 | pas de patch au catalogue |
| zubní pasta | 1 300 | 17 | on vend un complément, pas une pâte |
| kloubní výživa | 2 900 | 30 | voie orale ; nos deux produits sont des gels |

## 5. Modifications appliquées le 20/11/2026

| Page | Avant | Après | Justification |
|---|---|---|---|
| `/hubnuti/` | kw `doplňky na hubnutí` (0 vol) | kw `spalovač tuků` + `prášky na hubnutí` (2 900 + 2 900) | plus gros pool de la niche réellement servi par 2 compléments oraux |
| `/nervy/` | kw `doplňky na nervy` (0 vol) | kw `na nervy` + H3 `Prášky na nervy` (140 + 320) | bucket réel, kapsle + balzám couverts |
| `/klouby/` | kw `gel na klouby` (140) | inchangé + H3 `Gel na bolest kloubů` (110, KD 14) | gain de pertinence sans changer l'intention |

Aucune page créée : le catalogue ne contient aucun produit pour les requêtes refusées.

## 6. Reste à faire — nécessite GSC

La seconde moitié de la méthode (position maximale atteinte par page → autorité vs contenu,
détection de cannibalisation par requête) demande les données GSC. Le token Google est
absent (`~/.hermes/secrets/gsc/token.json`) : réautorisation interactive requise.
Une fois le token en place :

```bash
python3 ~/.hermes/secrets/gsc/gsc_query.py sites
python3 ~/.hermes/secrets/gsc/gsc_query.py search --site https://www.kloubydoma.cz/ --days 28 --dimension page
python3 ~/.hermes/secrets/gsc/gsc_query.py search --site https://www.kloubydoma.cz/ --days 28 --dimension query
```

## 7. Pages compactes produites (méthode Compact Keywords, 20/11/2026)

Gabarit : 1 page = 1 bucket de requête acheteur, ~400 mots de prose utile (mesurés sur la
section de contenu, pas sur le HTML entier), mot-clé dans URL + title + H1 + meta + 1re phrase
+ alt, tableau de prix réels, 3 Q&R visibles + FAQPage, 1 CTA affilié tracké, lien depuis le hub
de catégorie. Générateur : `data_compact.py` + `build.compact_page()`.

| URL | Bucket (volume CZ) | KD | Mots | Justification anti-cannibalisation |
|---|---|---|---|---|
| `/hubnuti/spalovac-tuku-pro-zeny/` | spalovač tuků pro ženy 390 + nejlepší… 320 + …recenze 140 | 12-16 | 417 | `/hubnuti/` tient le générique « spalovač tuků » |
| `/hubnuti/spalovac-tuku-recenze/` | spalovač tuků recenze 170 + nejlepší… recenze 140 + noční… recenze 260 | 13-15 | 391 | bucket « recenze », traité sans faux témoignages |
| `/mozek/prasky-na-pamet/` | prášky na paměť 110 | 15 | 392 | `/mozek/` tient « doplňky na paměť » |

Refusés pour cannibalisation : « prášky na nervy » (320) et « gel na bolest kloubů » (110) —
ces buckets sont déjà couverts par un H3 sur `/nervy/` et `/klouby/`.
Refusés faute de produit : náplasti na hubnutí 1 900, zubní pasta 1 300, dezinfekce na ruce
2 400, noční spalovač tuků 260 (exigerait un claim « nuit »).
