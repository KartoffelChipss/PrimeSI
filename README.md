# PrimeSI

PrimeSI is a lightweight library that simplifies the use of icons from [Simple Icons](https://simpleicons.org/) in PrimeFaces applications. It provides ready-to-use CSS classes for each icon and packages all required assets in a JAR that can be easily added to your project.

> **Disclaimer**: PrimeSI is an independent project and is not affiliated with, endorsed by, or sponsored by PrimeFaces or PrimeTek.

![Example of PrimeSI icons in a PrimeFaces application](./.github/assets/primesi-demo.png)

## Installation

You can add PrimeSI to your project via Maven:

```xml
<repositories>
    <repository>
        <id>strassburger-repo</id>
        <url>https://maven.strassburger.org</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>org.strassburger</groupId>
        <artifactId>primesi</artifactId>
        <version>16.20.0</version> <!-- Use the latest available version -->
    </dependency>
</dependencies>
```

## Usage

1. Add the PrimeSI stylesheet to your JSF page:

```xml
<h:head>
    <h:outputStylesheet library="primesi" name="primesi.css" />
</h:head>
```

2. Use the CSS classes to display icons. e.g.:

```xml
<p:submenu label="Chats">
    <p:menuitem icon="si si-discord" value="Discord" url="https://my.discordserver.com"/>
    <p:menuitem icon="si si-fluxer" value="Fluxer" url="https://my.fluxerserver.com"/>
</p:submenu>
```

```xml
<div style="display: flex; align-items: center; gap: 10px">
    <i class="si si-javascript" />
    <span>This is javascript</span>
</div>
```

You can use the `si--brand-color` modifier class to color the icon with its brand color:

```xml
<i class="si si-gitlab si--brand-color" style="height: 50px; width: 50px" />
```

## Legal

This library is licensed under the [Apache License, Version 2.0](LICENSE).

### Icon Attribution

Icons are sourced from [Simple Icons](https://simpleicons.org), released under the [CC0 1.0 Universal Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

### Trademark Notice

All brand logos and icons are trademarks or registered trademarks of their respective owners. This library and its maintainers are not affiliated with, endorsed by, or sponsored by any of the represented brands.

It is your responsibility to ensure that your use of any brand icon complies with the relevant brand's guidelines and applicable trademark law. Some brands place restrictions on how their logos may be used — please review the [Simple Icons disclaimer](https://github.com/simple-icons/simple-icons/blob/master/DISCLAIMER.md) and the individual brand guidelines before use.
