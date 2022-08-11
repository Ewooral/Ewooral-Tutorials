/*
Simple selections

It's time to begin writing your own queries! In this first coding exercise,
you will use SELECT statements to retrieve columns from a database table.
You'll be working with the eurovision table, which contains data relating to individual
country performance at the Eurovision Song Contest from 1998 to 2012.

After selecting columns, you'll also practice renaming columns, and
limiting the number of rows returned.

1. SELECT the country column FROM the eurovision table.
2. Amend your query to return the points column instead of the country column.
2. Use TOP to change the existing query so that only the first 50 rows are returned.
*/
create table eurovis
(
    ID            int  null,
    EventYear     int  null,
    Country       text null,
    Gender        text null,
    GroupType     text null,
    Place         int  null,
    Points        int  null,
    HostCountry   text null,
    HostRegion    text null,
    IsFinal       int  null,
    SFNumber      int  null,
    SongInEnglish int  null
);

SELECT * FROM ewooral.eurovis;

SELECT DISTINCT Country FROM eurovis;

SELECT DISTINCT Points FROM eurovis;

-- Limit the number of rows returned
SELECT  Points FROM eurovis LIMIT 4;

-- Return unique countries and use an alias
SELECT DISTINCT country AS unique_country FROM eurovis;

/*
More selections

Now that you've practiced how to select one column at a time,
it's time to practice selecting more than one column.
You'll continue working with the eurovision table.
*/

-- SELECT the country and event_year columns from the eurovision table.
Select country, EventYear from eurovis;

-- Use a shortcut to amend the current query, returning ALL columns in the table.
SELECT * FROM eurovis;

-- This time, return only half the rows using 'TOP', using the same shortcut as before to return all columns.
SELECT  * FROM eurovis LIMIT 50;


SELECT *
FROM eurovis
WHERE Place > 25
ORDER BY Place DESC;

INSERT INTO eurovis VALUES (501, 2022, 'Ghana', 'NA', 'NA', 335, 20, 'Home', 'Away', 0, null, 3 );

SELECT * FROM eurovis WHERE Country='Ghana';

UPDATE eurovis SET Points = 145 WHERE ID=467;

UPDATE eurovis SET Gender = 'Male' WHERE ID=467;

Select ID, country, EventYear from eurovis;