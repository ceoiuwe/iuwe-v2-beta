// ============================================================================
// IUWE CORE ENGINE v2.0 (OPÇÃO A — MOTOR CENTRALIZADO COMPARTILHADO)
// Qualquer modificação de lógica, layout de cards, áudio, métricas ou login
// feita neste único arquivo reflete automaticamente em todas as 10 páginas!
// ============================================================================

window.IUWE_ASSETS_B64 = {
            favLight: "data:image/webp;base64,UklGRuYDAABXRUJQVlA4INoDAABQGgCdASqAAIAAPp1CnEklpCMhJ5ROWLATiWgAzM5GfzP5AbTp4z8XOk5Mf8XhA/qvqa253PC/2v1vbxd6IHTMvzF0FcRE3TtfusnD/2mgzINN0O4XlBA1VM+VZHJTuQREqztMuclf+qfco2S6lTvSUeZ46P9FV0iFNt/onyRlucFpcIjqMsjVKythmzFnMSfeAPaLrA73powoQxPnN3l9VEndWpVlnQFU5eiT0j3DFyoyIcbgZZ2DG7zQGtxBqX/Mg2+nAnKcXCbD2R8vnqi6Cv5kqgdtYzMU2OAA/cmTrhncvGoyve8oGyVGoeXvGp3nPYsbgSnuRU4xGfq8HZlXLwAAHwNXxH/XLxt3IxaZmMa5KjS7CV8sarVxzCMRmKH/vdgR0YXNFqTe0ZWzQuHopJtfmOLqrimgAAdKty3oo57ms76Wn0PnvRn2O2LDAGjyiNlolkzn1D086/SR0H2ayM33BpIiQj5r1hdqj+G7IiIWNLV1ob67iDfAY02RVd8ra0ZfvB0fuag9UgDpaKCDEwJ7ALfEQI5FaDi56MWLgDD7ngs1Id2zOPb6iODBGQGYOqPiXRmC+5P8sMSFsjV2iyOM8QNvaH7J/8pYG2kTQ+KjQ2pkzf9Tj6x072sVto3YhCf9c+MI8qTYCvHkwsdC93q4JdO5D4SY+V6FD2yMTCFsyTAy4qj5KaeOt17ayKbqUW/DGbjKrul9zxlHzZ0I0djpGMZQGcHKdkYdT/02wzsZjviYAAaVQ1t+EBWmBFKRFKgNKNjPFobEEtl8axHBSug+RutogXLhp8vxYkWjLATASypyBPWsbvyDX9VfdBC0v1FTKGDjDRIDaB8Ir2LVZFtKavotK3NEu5vOpZoYNQ8wXO/DLJKiWHPA0mZ5T86OZ3oPObod39WGvY2w1GesTLvKQ3xzbwIoFE8+8UMWpz+2yyvTOADvzilTzG5ShIqms/N5JjWn0LzYkfB1RBXcw6QkpOnFDdQs4/c+VQWlf/3lGwaha6gSChfbLIvTOEVM+SeRHB/3GkcD8sOCdOBJ9KyG6+RaRUgE2ZJagJ/Inc2bMf1Gc9NIOv4KUBQHFSNGr1Z9cn3NNpOe3WZpDBgtboFIz3M4z5VfVy+ieX2UHrTKZgxkokPDHwOLrxunW77vQf8SIp8/Qff9zYo5TbTh6RALKgKeVAXCOGptis8jK2ZfTMsZsBnQvScTrkVySRiD8geNY16PHCvZ+OUWZRS1z1ASa38lT5LL2nZd6rdkTbX8JeyJKaGzVJnUY+E1kolW1GYpzj8E9vHKaP62yivk5ZU0gOLgUKAAAA==",
            favDark: "data:image/webp;base64,UklGRsgFAABXRUJQVlA4ILwFAABwHQCdASqAAIAAPp1Em0mlo6MhJhqucLATiWYA0bo0QC/sf5D9C4VP1JBH6HNuxzUHrq85nqhN6Tfm94j2j6LOxfat3e2CmlBxs+hboS/djrRH9B9aB/WeY/rozahFsQMqwQAdAn5t7vyLp+x74vMm4d+mwqlfzL3jzCYSSbElt6u2V+R9YpH3XmpVpy4GQxgC3UA+6svbaTaAt4mPbxfrjXuz7nyEYR5aCXLvv9V58d2aOILkfn6Qpt16HvUxk6mE/K3kLlPo66LFq6rb70AOLb4msABK0iA4K/vK4muAxXU1aU5MM6kvWKFwke7pV5r/1QPAAP3IOfurSFxvkJZCIwj8M/84aQYvnuezxqoYiff/+bUOag73+cNxfv0Kjgk+kn7xxS1b9k5O5YOoPY4sZ5IXv7wH6vZbBf3BK00sESAQv1INbMbqQnx63KqR14l+3mAyyRVxk1uM2962h/4h9V6UH7jP2b+0Xv21FfibWhBZ24+MMe7JtuRr0b9qHXxOrtD1SHfQbnFNzckxwj+NkxGdZF27rO8BYPsjJi/HFG272M5yJ6aMJj2BXvkkGHosVZ5ypb9aoWaKPVp3IN5ejLFzUCpkfdpdtMg1yBOffjQ6E+to8v60qAMyL9pU/fAz6uBWuyg/GqQFmP2I2pqBgF8W7SMxWDcC8m09/5aJRxAv1DsW+urs4UlARHm9Ljq3iBVg1cpembZTJvasrYw3Vg8bGnepwo/i3LBE3s6UtmdD4d/mHG5wsknue/8UuLV/NdCe4aK6ouYeUf/CmnJ/vBvzyZDlFaWIiKFySFX50VfohC6zHBKAlhZKvjK0E/JkN2H6kVJ2BkTBAKXSD8vz1B6fQoW5Ed/vntDcc5KiPb4iPDbXRAaSWtuQsBfNAK61Qs0G8bEwbOasYxn/Y5q8wuQ4DM7BE2d89Y1/Ren4+yqdFVoBlK5175Lyo67ZfWHoVtxH4h1/u/AGtedkUjSUskFiENUJsLi6Bi+Wvrvi82gphFuPbfmV9qzeXPc6crGaXSPg4knzoG+S8JOLtqLtYXVy9Me1GkJOOTnZHnBp1TffgQegnaOXXu5AX5u9C6nzjjvZRBLE/AYhpBI1VxSWB5v5wwOh18661AHP3K9qc1n37Y2lEA6nrisOhcXAuIpmMACS2VgoruT6uBaf5cZ1LDFVwvEVmUks4IQSMReL5u9kfi2PSTPfnVPsIgPDyv4zndhRF7r5mxrHNPZMLfbeazU+vl7b8g+h2Fg70ApUPG9vXT3DTwhq4Y8d8IFaJpWcAgfO+6Ij4neAFLqjJfNekaNLRE3EZ10X4kfpsT8WdtCcAsys836N4hyRe9jkPl1/Tp+Pnzraym/dRPwUhmSadM8rQuhMupQj4cStbWXb88xhVEOWfJVhFZzie0DslUHL1m42mUdaKa4koBMwb1m52/jEufJmjbX7/yXnuhzcWvsc7JHeiFGOmAmR72fCdKh8SDTkYKwwRVHbOQQL6PYpbts0iJkzl+GU6oUbU5dj5l4tIZnOmEUnjMYwH5DLknIBFA2mUrF64FNO++KztVjXzWzg5a68bTeb/MD2kPbzsGPboD8h30mrqvO/ZJiOZn7oYvZoDCczC8w3PKard29PW9X+YaHrzkt6sca5lf9DCZUt8vzMa+ERljJlBkKaiQQO9Cpup1r2crO4x645mEx1PPHvO5zlQV0sweODJwIOali8SRLQUd6ukH+CnFJeStYpfKBNQ1WbrCVQLIR62kORCSQzVZuRgrR0hLr38hPzBz9Pz+ayEjuncmzedZKxmlO4my6WOPTTyCtuQErnVcgoiltnuj5L+an+K/+2Z0SpJCwd6m9M6wrEFwMIgABM4+7/HLGFb8lBqA3NyY7v7WJrsp2FlXQr2lnahchRi+9fwE8tby+gmT9DnCTv4sQzNt/IB9vxHoI/wKFBWkEg5jp7EHvdtfzeQ5YYgAAA",
            logoLight: "data:image/webp;base64,UklGRsYMAABXRUJQVlA4ILoMAACQRQCdASpUAWQAPp1AnEglpCMhLjS8WLATiWYRQARBHk9fSGD5Pno27/UcNzXXmG9J+fH/Yepv+x7qnzD/tT6t3pu9Bn/KdUd+4ftAdNF+62Ur+Yf87295Bee3HcSAbSmAD81/sHfy6t3hnXuKA/HP/NTstbhkn6A1zs7Ll+qHh21rdTxnhA+fRAF25hS2X8Ej2FlnS0nAHYAXo4bLA6w/i1V6d7TuZlqEGBWzBku0y/9+XttnzV8KNPjM+1be4yGO+TuSUuV5tgtaLZkbJ8qwtZ/yOgWZMVMbQ1X8yeSzt5fi2weuApyytIXr5iwIRyr9PMqI5YeQT6HEDq4mJP1LfPMkgvsnQlutoVsqTzdvkg6kgGhIWkZ+O/bHt7YejCkDpt4yCSyWGAf1GBxzi5PqXKXRHoAyuACSSZv3JDdjnqAkuctHdUOUHuumTrXrBM0ze87Si+IyEKgqdh8devvvKo+WPxLO/lReT5A9pqE2wlC3rEBUk2vrtuM9NsD8BQI52tD/CchxO+yhGJx86p/ZRGYutPsBSu6J8NfUbHjAl3JYmG5lhzL6w8uWqBALHW2/zHE7IFX/WfNDCxAHlQ68vRUEV75FH/Ltz5CppyW2fWbE1neiHNvUEub5OL4vmbH47411dJExl68Iom3BmUrATB5qSfdBjnbCa/NlK2ifHjR8aOgqCsfdPgwER8ldUYv4TbKOxVHNRAmF+QwmLsRwD9FJeUWzVcxxe4Kj1X7y4uY+yVhYAP7xdkKpKp9Rfn9joCu2OyIykXXs/+QyTJFs1Pavw2Tbb2jo9FSsMpvy9rZ9fmn23MxBxc8VBrIOSP9hM+OOhyYSYgM30LpG20utSSOB2lqYvq8lXqsj7gDMdJxyRDMFOZy/fG+bTPZzBBZ7gYE0S0oEJ3kRZUZaLtTmo+EBY9xd+/asBVuKnbpeDH5DrPVVHl0+wHiMjQHKahoEFkIUdGmvmhDjA2AJzBWARPI2zWwLPX37afH5FbZ8JXwUPRbsO2PfnJwTRRl59LWGiYaT8S/lWRKNHlmhZMQOjT9de3IM/JVUCeUcvH0cmwGhuVDv0YNl1UWo8vCwndcu9BV4WdZtveImw35Ezr8VuIpOmx3C06/ROCg8kIE7L6wlJ0ihitMF2aSo+3ThJWeDsRLMQEm9T248tamp6fy0rdSxk0ywcIGGrkN0ZERnLzRAHkc6F/c1Q5WLoTjHesJvgZaGvutwDKD0OxblDd5ckhOJtusz97he8JObYxYK1w0nBErSRBtIHMMZ/oQRnU6kbUm4L8Ias5z+YuLIDDrrZtUUEU3zT5s2aKsAO6zh6v+1BC+ujlPyl29HzWLedl1pb1RrqHOmbFYDzIMvi9uGmawq5QzXamLMdVPAaIEu1YcC4Ye2gShTM3POjCrLu4kPriiFwS/1dRceg7l5zCurti1MrfxWhTFrrDHdU27dU8Cf0147X85O4FtkNfwW+1K5OIJgis81zpUsZe9P6FIZRFgF7zTylz5KJkH2QUbkogDia/ZgoyX6Oah4V6zPpaR/zAD0bAn57pHKWMDUuZ5TPMvyX43zj6ihDbLt3+8/sh3Us7821RSDM8T9Qu13hy0AjG1zgrCO/2iDbaTuwgM9DLIvDGwNc/M8d9vT3RRybcdLdFbf646b65qxVdgt8m24YhnSsJ0/fb8L5Idnez1nuySxdTmXBr7Qwh86x0soKWfK6Lbx4+JUG/xV9i/i1D1TjFpJ4Gc6pEb4/S9QbQxIMdsXyTjgQtjiEuoJtiK4B1rRphbXWoVnNIuqeFAZaxFmb/jXGXIuEGkp1AvMQ4pgm+okxQeyFa1ul7LUC5IlXgeAUwBJnyeTguzVjFMO6z4ewJhcb3SttJxdfG9niRGhWkXm1X2gQVHspoiu6/dDMSFHNS8Sg4QLO7wIl8QsnwcdFzEq3jh7aejcrYxd6Z6GdgQkqrkpLfA+iTXe7ktVfgb9/B0fYGROQS3c1vOOnqrdn/rj/DS+EsD5U/9s7KfleBuN5Jglapd6ujdsxpExyiwf2DsL/9PwJPNIZ4P+sn77FZ7uJy0TGZx4QhB0nvHRe6eDvoj3cU+gnYECUxY+oOcDqIrraJU2AqFC1uIch0MNnnxTwW79rhwChbI9Ts/Jy+XxEIfdscDp7PYr7fzmRWNyrSoBodqhNzjxLbOG5Xv/eueKJVaJLz7tk+u5p0bZPuNcYS7pZOjBXHI1AYDL+Dy9yup0B5nz7iz240hV1Zy5eFVV1b7gRGKO89pf7SU124ZS4u7hxFMrOralE8mOanaRF1CX84VSxN/naX2jkhQQ+tIFmw9rcU//FX8RNbZjIK3WgSlnmDJ1Hu3nh69XjD7OwavGdcyunY35yif5w1lSuXe0feuDR3n7CM/JQlP/JdL9FViwp9165pws+UfwKCbwex3jRoFw2UMZEXCYi/4DCPeNHH9AOGTcp+btOiHLtT4QcxLeIeXTjJJCOzuQlp0Pofws77A7rZ+4utJvv0aZ90TMrEwlhsAkKftmMcgT4hLqL8i3b1Slb90NVto/KMtFYc2yVUiE55Ls8K2omG0PKCJSkbWfdG31BAfDti60cS820M3Jb23WV+CON9eHnZYgW23AaSVTDAzkJQhgqqrSDj+hSbH6l4p/QoafJoBdTF5juY0ASNf4iV9mwHi/KvlP+jQ2aDbHDrg90dAPt+NYwhcUNYUgd4Y57za9KUHmzx8VRdisKF00qfpel//6puOBXOHZdIH1SYqjiR43NnULj3EkRtV6uTWXH+5eGzb6hR+1yc1ZP6iiY3e+3DZHOFhznitJ/2yWeEL57ReNKPPM3OlKDNpn1y4uchZ6BMB5VPc7YInN43jIVELsHyKMMUu1OtATyWO6hahdHXot2PeHsKlc5kfrf3YJvTRDRVd5qAET5GijHqlRiz3ft4qFM/U17YaN8DDiYh/UYht2FjzRwi6bSvBt0phxyfRNKAc/0kpXXXj7gBiaUfZi+wKTafu+vjAx1QfVusrmH1csm3HtG4B2bBWWBESBwJqtGgXfCSp0FM+OWwg97ozhr7H29C4Raa2//Q6uU98kEwr68NLm3PTyQvqJEv5DltK/9lcJrF0lPW6Em8D7vkwPUbHm/urBQh3DTAJqXiCscIXKC8Um4bDfXBlc4wuSC6Aev8TzPtQoKLU6IlV5xZ8+0Q+/cXByBkLcZpSPu4d6CROa6WWgObWUgKYH0TduZdrT9DhAT3wpMc1LOHFwWEQkYKEniO4rpuIpvntaeZuHt+oRAe3NhtTOLKT8c/TV73tcZ3EKLNuA7BBWPvcMplnGe8Owdx30fq2zTWaa3w/y0yYGndlnn2CVGCtu8oUyMIiexAXl+jB4dh4ejKwBaSCPLrBrK2cCMoy4MESdhzHazzpPcXypPZR8O7QnXL/4+c8jB9lj99CMAFo89K9Aum1DO+4w/GdiznU0HmrRPNGuvBy2wUbHcuMmwrafBxfVYCrT3CWrq8PIgfnNvfpks2US6x3Ltx91r6cJbVkCd39ShbmbHjBLIQUnEpwo5ka2KGeD4+ZnltS2rPdAvjegoG21/Ij6t7mXevEqxdaHSGSd1zJ50vwaKmY24LDMqvUjWHIuighFH0TPYJGVid8sqKrL2oJZrW1HDqEFnXD6q7bWAn3o8PHnjOTPBApvY0w5Almf7XfxmeGMxOz+OrQFtlbxsEyypEk046W7cqYvCtEIFK8MD6TpXF7g0+LsTwHotpUlmJ7z+Ky7t3oUowMsGnHkGYjwLBOxTef75ffvtPBzTvmF1XZg1BAjBSOXVRK6AoYsLhcvw43ZwIIYpUDR1v1m5xQChU+zvIhu6XrfZBgbE+jZ81tTMomfW9iUZpRX2j3iKsU3c8UZb4NyXyskE2/3x6GmYTB1axcrhijfNHOe2LrpwHBkyQXtQvmwpkrbN1ds2/MLnNYRmomJpxG7Ysy8XhGRevuymDdpXM9TvAbzByAFJstihpDguJnmv/vNb8oaMWV8N7Cn8tb48Jbhr8kCATshkoL08tSr32V05ok8VvGli7z/Z6O6vEe0UqJYNgG9Sletmhnfxyjoo/bWo+v40okOOmaETLEWYPZ8HOtkw4evf2wPZoq6c4mtCb2F74BJDjeyC78Zt7NkDovYIjOBJPdZ8UKR9yjYBfnEmNgmuPgTPRKwRxo6/yBUgdfukQ0XkoB4O28kEXyey7Sxr2HE7WJRuObQnte/oumnLRnS5IYe4w7OqEHND8n1ldUy5JPTNo36wt0BuQNKmySNM19xcWcyz0Subwg/RuoIsUyiN9HImuJrwvzYgNSBvC9aAG+8ogs3VfLeFhHEAAAcqPCYFeuBKAAKDA7Am0IAAAA=",
            logoDark: "data:image/webp;base64,UklGRnYQAABXRUJQVlA4IGoQAACwSQCdASpUAWQAPp1GnUqlo6MhpTKdkLATiWRu3VxYvLW7xORu1ofecDHyH/F8zp+T/SeqH+07rfzH+bP6ePPA9KX1uvR26af+75KT5q/znbX/lP7R5F+Xz2/MjuM/jf3p/aeFN4f/DrUC/J/59vBoAPrL35v+R6D/Xb2AP1o8bTxHqAX8//xfokZ9Xrn2Fi6cMCjpVcws6zF9HEQGHQRU0AK645iDiRnqdmNTF+WgTZNvU5f6OPcNxDquJk+aU/yitlS71iTDvvMFKhHGvc6JNpaVaE7rILeqhNZ2sRBUAC+hZ5m2tgZ4czd31p0aAUfOGUB3eV+Vf45kMx1eKicM8Xqn8jP38EQBjJtCr2N0MmHtuyiskfqH6e1tKbuLGbbEifpMFqN2oOV4HmiMvkVlREITtIe9sJcyyc8/ERICDJPdZND5ub6B0cO8VdVL1Hh4G6cWhFpjY6ypRjRbAamAlDyoeYnkemy5TvZY3O64TbQbvlva0ycQlfzRv+qZO6hHdIbyTA6MvPS2+uWbnXr8JkMiyFKKmRjtvmJXnZZQiaxZHKngeRmm/IeEwZ8OMnw6xxlViWknKFqonKcc5fViLY3rpqEFPrrFa/rQoZoIcX36q664qjYG5WtGtDwZKmJ3EQ/mx+v00ckIkE48VzAHnQIyGyzmb5YBmhKgJ+/7g4HLRiGaj7J0XjDIu2ejZSUGkUIomD/dIpPRT4ca+HCsloxBXMXjuWEHWoEq54gqyXzso7kpKcyrMwqBHntNQUnefcG6jJtJgMGSGiqYNkR9qW2uXNUAAP7yQJyBH2laR0duD1Y4mf7V7qc4jNlonLiKSFuIKh1UGjOBCbNZgazDEHLs+pKjZCurT6NuUov5Yx9q4E3Pugy8zL9Pm044G3TAJ7r9DqpLTzXKAbdAK5Ud7UqORgNMw9cWyMEQ4IEvBG07brzGB6kQYl9BirJfL52TV8/f3sbeIR4vQP6B+uDA7ciM77UtrlSV7j7tB61C4OAg0hTZM+PNaeCWNtZsKIsKnVJMLWOma1OT0wuSEfhiqhvlzyoXzD1eHsUTfJ9E5vyApuysencqNUdebn1B+luOI+GeKDIYlZ+OMm4ipp+uaigJCS0b4rWd+uPdST2vXZdX7sVy7APeg2NNAyxBDhjd4fKuPMmkGDYKZSXUKxuDZ48ug7UJii6gBdfG1NuYtpUnqn/yHIsuOUumJ20ooGot+goVv4YrhHhvdDVBBFKIMJ+TcfPTiRWpHFoH6fP8VaUSBpyWqUWmMBqGUu6mJnfNXH+ezGJ+vPAQLYd3pIBmYhb76BjdvHejXY2BjkfDLYSVAxn0fktk/ue7yYLPc+fVYCYdzkfdmF36hlAPLfDueWEo9v3m0AuJ2kWjjA8XWTbTWFhk7bnmvFD9M29gKCl46/Kob8m5wOu91Z4GGEe4mxjpxgtN7TiAgsIWkxktkHTyndScn9zx0MMBidi+4VbHlPdysG7eB+FnEcpHLeJUpbYYWD9dUhLG0Wn20ODFXNjE7APxn+GC+Y556zmeyodNuV03TJkv6zxMI2C/aFBnHZpYyjwlJiyWJpy3oDyUJ5bDi095ZIaDNnaE9POon1YxsKvRjOId1x4DtJDObdER/e7vpsFQNwCUhs9mwYiPLKJiCUfjjxeVywZx+dIdskzfT6zTZtP3EqHMv8sLSH6uOq9ePvRL2X3m8mQjgiSVHa93k3Pyun4pevItaJt8jlkil0aAfOKgPe6d4ugFCRoNw9stpXmMgPMVhhfUojSF67VPtkuR87hV/XWpqajL4V7z8MBxGuUvVNNBmn6MJ9Yrvyi5ch7X96BE+DnkUFuLxZmOUJRr1r+ugHiYHI/FvHTNfq29Zg0t2u0XM5i9RFJm0XUuU4jVtFuRYSLZjcLmDvG8NhsNap1RAqBpYdjsP7zmZN3RHg3B9i3MQzp3LJtOo4MhGxknzyMMklDr7EtCH2t/DTHueMN35onIuHKMas2hueeCWf7DIrLy/1gXMoMzHWfI8tueHpn9RqUqxIwDckMPfCCkUzgEuRhhkEob+X7v3Uik/PiC5qlJZyQmDd6Sr3MFm6/C/17I5XM8Yq/45CshE329uHQO/MnPnEJtQwUKpQyNE+MZJ3qMlVId0ymh13PPSHYwKC9ZPtFBUksYWhXngv3ZQDRelBgLydnei5fiKeJbzRUAgPTQdDa2oEthYzz2CZVplZJw6aKs0S2gKeVuPhUQRQ+JMqckcFxXCXHlZDTlyFKMmldqV/CoN15FKTkBjCzutLm8uyAqOVNa03k+8MH5ljOF22c2tjM8Hp8qulhd0Z83lE97t8PMtK99SH9imiibqt0YdNg9uY57qp7fJtR0++rMLnup1Z4DqCMoqo/1qXEjHaT1/IiMO3Ds9LTv7bOi+ZB2jZjvKdIsqu+Wyv0cXHIb14PBYb2GscNmSHYtEWhRcS3YQ+n28OEtBBphHyVu5/+1IQIcq0iWWNqVNb2ktU3abiUkDHwfLcC+f9RptfDVLMBw2rbgpDfOBF8qDqNuYZ4oCDXnFvIgFt03zR+Vct1O70bmVMICHRY9sGvqh26K5mfWAY1g2mx8rZwrZq/5EA/XNhbxWh/vDdNEg+/wtO06M9FX7HRKBlsHKyFRT2cAVxCEt5MxSWV7qalrlub6xWQPa9xqrasQrbm0otzLkPqZdCjMEdZDWpwVuwyA+IfJcPhi2iHLZh8XhS8W+b0OAiSA8PWrFWnsmvHWIdXGODBlZQF78PctxDEzsOQgvtEB01tLPVCUyQNgJOvIqeEwb5SzBc1PIyOkJ5wc3dtwhtuZBphRu3RoVcKCDWJdeCwTJ0BSRbDy6NBr+EafTJjwlrxLcDbOFNrUne2tsqJDQAmOC980pwdav7AQAN5hnF6qzcg+mzF3xiixW4m200MhOaR7OVfzklW7eItau4DY/bkKWRLHw/hiYV3FWpKHn66QTLhiayK1CK3G7nng1mssF/xKlLOGYGnQx9qOflxPMbrHpGEeTOKk+p3/yFuUjaZGWH/X2YGKZA7dw8DSmBCDenh1vbauqvXsVCYxvqzihL0VpjhzsmyQTlHwpbGyqDNzmtQ18Cx7XxVg9MzSQbVPuomjw1gUL/n+2g00LqeY/vO0MaJE5b7iprkNAslU7qSRiJ4nQnrmd+3BRdcjnVIXQuipsvD7B2xL5KZsG+QZHl4bqlrFKD2g7lgUvAjQd7TlunsLXIMLO0mQaSiQr3SJckrdSyrwdOofIUhYHEDOgBlp+GcRTqfoY/Wxt59Qbq+6LMKr6O7Rs/nzL0LnANBtKjF2b1Rf6pgOAKCreJR6FJpEAO9WAjyDkL+G7q7KuqmGuIx77eA+1UFgK4MWLBSgjF57POEHft6u5TBeXfT97KDGQ6REM5PEXRWfJn3lkQylpQqpPGh673KEjua8QqA36MrACmbB7omMUgz2RLVYyFNQxs+GoDIH7Mcz/Fjr38rZnU41h5n3mxN3PDsRMgrP6q87mOmusjgBJ3rSr3Up1AgGHuzNCY0oufoq33tbWpvhdwZWra0ChFr9t3XTAzeebV2hvRA5UI439rsg9kuWGcbQFknvkTt2Xy7C4cphqZi87S8eyO9jOpNSlP8aKEouyWGK9dL9z2Euj6jqawxjtkzi02D4jWaKY6SltvmrHrmwNDyBqD+PO4E55tJbur8qpppEyjjAf8XbULsbOv21yWxYcLf+aGJDb1ZFKqOPvllOHxC011iZe8hEThMkSIY5Mlmn59nc43csaiSG3I4So57IKUnithpl0nFPqXD/nzluZtXeiWU+IHIJydTYCVK3SLI5S12PkO0HSb1fKfmODN8V0yefjUVc1FH8R5wTU6eZL1UCNpnTjHEO7SJ8pDWdvNFVuiuI06WasWJyo0YaKQ0Nhq6YjTaAHFSLrijtYk4qDd2A12m7DZzoZZWP9c8kTNsP6VDC8J9UxT+N+NfiaVBGTr8zPMxxp0T7LuPhdSOOXlYV5umIRpJ7KNhKOPTh+ELHakvMTxKSOFFRiO56P2uqpLtchB2F/n6uYs6A2+N3Q7ZRs07HL91B+rffFzEzhZKunme0kCh/eYn011/BIsqDH5Ej82SRvxBMXV/eT6fCICrflaGIvJL1mb7/VWGFMQWWUa8eKW3yhD7LA8Ovhkg94oU+Sjn70G41+eed+y4luvKCRUIRCAk9RlgpzWzzh2U7R0VMY6tD/8dRDuhNWmNMkan0iaAvnCGZgJqKkyRg9ba1IWTB9soCPj+lY4ZSFgz3V/Xgkql0fTt3kwlTtmkxNPwZ4lAtPJ71MF8++OYJ2BxUNkA+9JcoJXlkfu0AtaWOCEibTEgegKQfFS4VpEQtEdmSGi1Y/VvyvyEbZSmYVDRUFLlYT2wA0ZkOzursNM2Ft8ys2vvvJ83dTu0c0g+IVOIe/xutR6k9pPFPw1te/SB19+nfRDvuV+lWulCJt50ov7Qp5mdTVp8aaTW1ogBWyhIsb0+qky6WTuWCZySBlkQJ9RTQ7j+yAkP6DGHhkHXI+z815ruk1e3aMML76Q3mGzbLxU/SZYCeiBIvAhwxYgf2Tkr4TjpPBbQMVhMfmMxtFESLcqR843+nGU1Z9fSyyEf/aXYyY53XpMs2Xv1iwVmHvBxBpLKa3z/551sg/8B1LfgKpJ8fbgdTtyDFmM4PNMvmGAPplX+EJrdwXOjyE51ktStS943xT1uAU4Au4DHoljPt0v65V2criP3m8XmnbisdXrO+P3ZGlYweuxt6/I5XpQOs6ckxF4m3b1MaU+Ig1Lf1IjmKzgxvfBllGutbayVpbEwlprCccHuhyNXJ56tsrDTvGOkaSavHuwEts3joFDuDHTkyNwbb8Nl/nFdzXPkRxmGcww9EPrBKFggUe+en7T2uRqecZ0WJS+vkII2SIQ4fWc2nh0QWfgnAwbONj/002Msoonbc34y4gGae00PkR+OER3dRROgbPgAmZd0RDwHDeWX6JtTly/cWcmL3+eoc4g+31q3l6Lq8tOQHRCBlPTErtfykBXTVF43G5OAnY5oL2gKnFfs9Sa30uOqx09K6bqC7MR+KFKY8ndAJ7GD+ULkJQIZZBODpQGr+tkGR60qSkV+Oltrn6DBEtePfDechfCL1PsDqc17tr2/4VBUQu6a8Q+LUTfBit90AmBGK9Uebj+IxgBmvCIuauJEmLNe3mftKik1e8Cbrzn3mOJC8CKXNrgmRHGZnFS2xVM05mhIRHXHWrs5VAQLRUJwT1B57hmGjrnQtHanWtjjv1e77IFiEkdp1aFmJioaUVv1CjyPOGrE1u+WwcCwl8Ugv7VS9O0lXuD13K6lNDrwQERf5/+VQjIjQ1LGx2zXdPhtc2pQ64xLCfm1rGmkA7JAANj0kRrZADjygPivT4mDoMp5C3NwmynR4q8TP0j2M1Tz4rxp+WYmjJHZtzBhXEYV51qEzYi8Fhl8bICo2wYmIx7lywiyTEk4dSm/piMbC2b8zThSmgolcafpqhbevhtc0SJZ29PcFaFiGke4uSEUWv+1mGg7RdAar+k6SVNCTxoEjjKTO4A68AFhHuexJdaWYMyNRkSW2c9P8bENOWWCr4l/aZedrT2KTAAAAAAAAAAAAAA=="
        };

        window.toggleTabHelpSubtitle = function(elId) {
            const el = document.getElementById(elId);
            if (el) el.classList.toggle('hidden');
        };

        window.toggleExtraFeedFilters = function() {
            const panel = document.getElementById('extra-feed-filters-panel');
            const chev = document.getElementById('chevron-extra-filters');
            const lbl = document.getElementById('label-extra-filters');
            if (!panel) return;
            const isHidden = panel.classList.toggle('hidden');
            if (chev) chev.className = isHidden ? 'fa-solid fa-chevron-down text-[9px] text-iuwe-blue' : 'fa-solid fa-chevron-up text-[9px] text-purple-500';
            if (lbl) lbl.textContent = isHidden ? 'Mais Filtros' : 'Ocultar Filtros';
        };

        window.toggleHeaderMoreMenu = function(ev) {
            if (ev) ev.stopPropagation();
            const dd = document.getElementById('header-more-dropdown');
            if (dd) dd.classList.toggle('hidden');
        };
        document.addEventListener('click', function(ev) {
            const wrapper = document.getElementById('header-more-menu-wrapper');
            const dd = document.getElementById('header-more-dropdown');
            if (dd && !dd.classList.contains('hidden') && wrapper && !wrapper.contains(ev.target)) {
                dd.classList.add('hidden');
            }
        });

        window.applyIuweThemeMode = function(mode) {
            const isDark = (mode === 'dark');
            document.documentElement.classList.toggle('dark-mode', isDark);
            try { localStorage.setItem('iuwe_theme_mode', isDark ? 'dark' : 'light'); } catch (e) {}

            // Troca automática do Logo (Light Blue on Black no Dark Mode) e Favicon
            document.querySelectorAll('img[data-iuwe-logo="full"]').forEach(img => {
                img.src = isDark ? window.IUWE_ASSETS_B64.logoDark : window.IUWE_ASSETS_B64.logoLight;
            });
            document.querySelectorAll('img[data-iuwe-logo="favicon"]').forEach(img => {
                img.src = isDark ? window.IUWE_ASSETS_B64.favDark : window.IUWE_ASSETS_B64.favLight;
            });
            document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach(link => {
                link.href = isDark ? window.IUWE_ASSETS_B64.favDark : window.IUWE_ASSETS_B64.favLight;
            });

            // Atualiza rótulo e ícone do botão Light / Dark
            document.querySelectorAll('.btn-theme-toggle-ui').forEach(btn => {
                btn.innerHTML = isDark
                    ? '<i class="fa-solid fa-sun text-amber-300"></i> <span>Light Mode</span>'
                    : '<i class="fa-solid fa-moon text-purple-500"></i> <span>Dark Mode</span>';
            });
        };

        window.toggleIuweThemeMode = function() {
            const isDarkNow = document.documentElement.classList.contains('dark-mode');
            window.applyIuweThemeMode(isDarkNow ? 'light' : 'dark');
        };

        (function initThemeImmediate() {
            let saved = 'light';
            try { saved = localStorage.getItem('iuwe_theme_mode') || 'light'; } catch (e) {}
            if (saved === 'dark') {
                document.documentElement.classList.add('dark-mode');
            }
            try { window.applyIuweThemeMode(saved); } catch (e) {}
            window.addEventListener('DOMContentLoaded', function() {
                window.applyIuweThemeMode(saved);
            });
        })();

// ============================================================================
        // 1. COFRE SEGURO DE CHAVE API EM RAM (AES-256-GCM)
        // ============================================================================
        const secureKeyVault = (() => {
            let ephemeralAesKey = null;
            let encryptedPayload = null;
            let fallbackSecret = '';
            let maskedCache = '';
            let hasActiveKey = false;

            function mask(raw) {
                if (!raw || raw.length < 10) return '';
                return raw.slice(0, 4) + '••••••••' + raw.slice(-4);
            }

            async function ensureKey() {
                if (!ephemeralAesKey && window.crypto && window.crypto.subtle) {
                    ephemeralAesKey = await window.crypto.subtle.generateKey(
                        { name: 'AES-GCM', length: 256 },
                        false,
                        ['encrypt', 'decrypt']
                    );
                }
                return ephemeralAesKey;
            }

            return Object.freeze({
                async setApiKey(rawKey) {
                    const clean = (rawKey || '').trim();
                    if (!clean) {
                        this.clearApiKey();
                        return false;
                    }
                    try {
                        const key = await ensureKey();
                        if (key) {
                            const iv = window.crypto.getRandomValues(new Uint8Array(12));
                            const encoded = new TextEncoder().encode(clean);
                            const cipherBuf = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);
                            encryptedPayload = { iv, ciphertext: new Uint8Array(cipherBuf) };
                            fallbackSecret = '';
                        } else {
                            fallbackSecret = clean;
                        }
                        hasActiveKey = true;
                        maskedCache = mask(clean);
                        return true;
                    } catch (e) {
                        fallbackSecret = clean;
                        hasActiveKey = true;
                        maskedCache = mask(clean);
                        return true;
                    }
                },
                async getApiKey() {
                    if (!hasActiveKey) return '';
                    if (encryptedPayload && ephemeralAesKey && window.crypto && window.crypto.subtle) {
                        try {
                            const dec = await window.crypto.subtle.decrypt(
                                { name: 'AES-GCM', iv: encryptedPayload.iv },
                                ephemeralAesKey,
                                encryptedPayload.ciphertext
                            );
                            return new TextDecoder().decode(dec);
                        } catch (e) {
                            return '';
                        }
                    }
                    return fallbackSecret;
                },
                clearApiKey() {
                    if (encryptedPayload) {
                        try {
                            encryptedPayload.iv.fill(0);
                            encryptedPayload.ciphertext.fill(0);
                        } catch (e) {}
                    }
                    ephemeralAesKey = null;
                    encryptedPayload = null;
                    fallbackSecret = '';
                    maskedCache = '';
                    hasActiveKey = false;
                },
                hasKeySync() { return hasActiveKey; },
                getMaskedSync() { return maskedCache; }
            });
        })();

        function showToast(message, type = 'info') {
            const container = document.getElementById('toast-container');
            if (!container) return;
            const colors = {
                success: 'bg-purple-500 text-white',
                error: 'bg-rose-600 text-white',
                info: 'bg-slate-900 text-white'
            };
            const el = document.createElement('div');
            el.className = `${colors[type] || colors.info} px-3.5 py-2 rounded-xl shadow-lg text-xs font-extrabold flex items-center gap-2 pointer-events-auto`;
            el.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info')}"></i><span>${message}</span>`;
            container.appendChild(el);
            setTimeout(() => { if (el.parentNode) el.remove(); }, 3400);
        }

        function escapeHtml(str) {
            return String(str || '')
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function copyTextSafe(text) {
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text);
                    return;
                }
            } catch (e) {}
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); } catch (e) {}
            document.body.removeChild(ta);
        }

        window.toggleApiKeyModal = function() {
            const modal = document.getElementById('api-key-modal');
            if (modal) modal.classList.toggle('hidden');
        };

        window.saveApiKey = async function() {
            const input = document.getElementById('custom-api-key');
            const val = input ? input.value.trim() : '';
            if (!val) {
                showToast('Cole sua chave AIzaSy... primeiro!', 'error');
                return;
            }
            await secureKeyVault.setApiKey(val);
            if (input) input.value = '';
            isFreeAudioModeActive = false;
            const btnFree = document.getElementById('btn-toggle-free-audio');
            const iconFree = document.getElementById('free-audio-icon');
            const lblFree = document.getElementById('free-audio-label');
            if (btnFree && iconFree && lblFree) {
                btnFree.className = 'w-full py-1.5 px-2 bg-purple-500 hover:bg-purple-600 text-white text-[10.5px] sm:text-xs font-extrabold rounded-xl border border-iuwe-blue flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer transition';
                iconFree.className = 'fa-solid fa-wand-magic-sparkles text-white';
                lblFree.textContent = 'Áudio: Gemini 24kHz';
            }
            updateKeyUI();
            window.toggleApiKeyModal();
            appendLifecycleAuditEvent('SESSAO_AUTH', 'AUTH_KEY_ACTIVATED_RAM', 'Chave API Gemini ativada em cofre RAM AES-256-GCM (Passo 5 Comunidade)', 'SESSAO_ATIVA');
            showToast('Chave de API ativada em RAM!', 'success');
        };

        window.revokeApiKey = function() {
            secureKeyVault.clearApiKey();
            updateKeyUI();
            appendLifecycleAuditEvent('SESSAO_AUTH', 'AUTH_KEY_REVOKED_RAM', 'Chave API removida e zerada da memória RAM', 'SESSAO_ENCERRADA');
            showToast('Chave removida da memória.', 'info');
        };

        function updateKeyUI() {
            const has = secureKeyVault.hasKeySync();
            const masked = secureKeyVault.getMaskedSync();
            const txt = document.getElementById('api-key-text');
            const box = document.getElementById('active-key-masked-box');
            const code = document.getElementById('active-key-masked');
            if (txt) txt.textContent = has ? 'Chave Ativa' : 'Chave API';
            if (box && code) {
                if (has) {
                    box.classList.remove('hidden');
                    code.textContent = masked;
                } else {
                    box.classList.add('hidden');
                }
            }
        }

        // ============================================================================
        // 2. ESTADO DO PERFIL, TAGS SEGUIDAS, AUTORES SEGUIDOS, CONTATOS E MENSAGENS
        // ============================================================================
        const USER_PREFS_STORAGE_KEY = 'iuwe_step5_user_prefs_v1';

        let currentUserProfile = {
            displayName: '',
            handle: '@usuario',
            nativeLang: '🇧🇷 Português (BR)',
            learningLangs: '',
            bio: '',
            isAdult18Plus: true,
            followedTags: [],
            followedUsers: [],
            savedPostIds: [],
            blockedTags: [],
            mutedUsers: [],
            blockedUsers: []
        };

        let activeMainTab = 'public'; // 'public' | 'personal' | 'create' | 'contacts' | 'saved' | 'config'
        let publicFeedSubfilter = 'all'; // 'all' | 'following'
        let personalFeedSubfilter = 'mine'; // 'mine'
        const multiFilterState = {
            format: [],
            user: [],
            tag: [],
            lang: [],
            level: []
        };
        let activeCreationTool = 'audiocast'; // 'audiocast' | 'flashcard' | 'livreto' | 'vocabulario'
        let activeContactsSubtab = 'connected'; // 'connected' | 'suggestions' | 'invites'
        let activeMeetTarget = { handle: '', name: '', topic: 'Prática de Conversação' };

        const directoryContacts = {};

        const CREATOR_METRICS_STORAGE_KEY = 'iuwe_creator_metrics_v2';
        const PERSISTENT_DEVICE_USER_ID_KEY = 'iuwe_persistent_device_userid_v3';
        const UNIQUE_DOWNLOADS_LEDGER_KEY = 'iuwe_unique_downloads_ledger_v3';
        const renderedViewSessionSet = new Set();

        let creatorMetricsStore = {
            followersByHandle: {},
            downloadsByPostId: {},
            uniqueDownloadersByPostId: {},
            viewsByPostId: {},
            uniqueViewersByPostId: {}
        };

        function loadCreatorMetricsStore() {
            try {
                const raw = localStorage.getItem(CREATOR_METRICS_STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (parsed && typeof parsed === 'object') {
                        creatorMetricsStore.followersByHandle = parsed.followersByHandle || {};
                        creatorMetricsStore.downloadsByPostId = parsed.downloadsByPostId || {};
                        creatorMetricsStore.uniqueDownloadersByPostId = parsed.uniqueDownloadersByPostId || {};
                        creatorMetricsStore.viewsByPostId = parsed.viewsByPostId || {};
                        creatorMetricsStore.uniqueViewersByPostId = parsed.uniqueViewersByPostId || {};
                    }
                }
                const rawLedger = localStorage.getItem(UNIQUE_DOWNLOADS_LEDGER_KEY);
                if (rawLedger) {
                    const parsedLedger = JSON.parse(rawLedger);
                    if (parsedLedger && typeof parsedLedger === 'object') {
                        Object.keys(parsedLedger).forEach(postId => {
                            if (Array.isArray(parsedLedger[postId])) {
                                creatorMetricsStore.uniqueDownloadersByPostId[postId] = parsedLedger[postId];
                            }
                        });
                    }
                }
            } catch (e) {}
        }

        function saveCreatorMetricsStore() {
            try {
                localStorage.setItem(CREATOR_METRICS_STORAGE_KEY, JSON.stringify(creatorMetricsStore));
                localStorage.setItem(UNIQUE_DOWNLOADS_LEDGER_KEY, JSON.stringify(creatorMetricsStore.uniqueDownloadersByPostId || {}));
            } catch (e) {}
        }

        function generateRandom8DigitId() {
            if (window.crypto && window.crypto.getRandomValues) {
                const buf = new Uint32Array(1);
                window.crypto.getRandomValues(buf);
                const num = 10000000 + (buf[0] % 90000000);
                return '@' + String(num);
            }
            return '@' + String(Math.floor(10000000 + Math.random() * 90000000));
        }

        // Garante um Identificador Único de 8 Dígitos 100% persistente no cache do aparelho (localStorage) mesmo sem login
        function getOrInitPersistentDeviceUserId() {
            try {
                const direct = String(localStorage.getItem(PERSISTENT_DEVICE_USER_ID_KEY) || '').trim();
                if (/^@\d{8}$/.test(direct)) return direct;

                const rawCrypto = localStorage.getItem('iuwe_crypto_identity_v3');
                if (rawCrypto) {
                    const pCrypto = JSON.parse(rawCrypto);
                    if (pCrypto && /^@\d{8}$/.test(String(pCrypto.publicHandle || '').trim())) {
                        const h = String(pCrypto.publicHandle).trim();
                        localStorage.setItem(PERSISTENT_DEVICE_USER_ID_KEY, h);
                        return h;
                    }
                }

                const rawPrefs = localStorage.getItem(USER_PREFS_STORAGE_KEY);
                if (rawPrefs) {
                    const pPrefs = JSON.parse(rawPrefs);
                    if (pPrefs && /^@\d{8}$/.test(String(pPrefs.handle || '').trim())) {
                        const h = String(pPrefs.handle).trim();
                        localStorage.setItem(PERSISTENT_DEVICE_USER_ID_KEY, h);
                        return h;
                    }
                }
            } catch (e) {}

            const freshId = generateRandom8DigitId();
            try {
                localStorage.setItem(PERSISTENT_DEVICE_USER_ID_KEY, freshId);
            } catch (e) {}
            return freshId;
        }

        function normalizeTo8DigitHandle(rawHandle) {
            const s = String(rawHandle || '').trim();
            const m = s.match(/^@?(\d{8})$/);
            if (m) return '@' + m[1];
            if (!s || s === '@usuario' || s === '@estudante_iuwe') {
                return getActorHandle();
            }
            let hash = 2166136261;
            for (let i = 0; i < s.length; i++) {
                hash ^= s.charCodeAt(i);
                hash = Math.imul(hash, 16777619);
            }
            const num8 = 10000000 + (Math.abs(hash) % 90000000);
            return '@' + String(num8);
        }

        function loadSavedUserPrefs() {
            loadCreatorMetricsStore();
            const persistentHandle = getOrInitPersistentDeviceUserId();
            try {
                const raw = localStorage.getItem(USER_PREFS_STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (parsed && typeof parsed === 'object') {
                        currentUserProfile = {
                            ...currentUserProfile,
                            ...parsed,
                            followedTags: Array.isArray(parsed.followedTags) ? parsed.followedTags : currentUserProfile.followedTags,
                            followedUsers: Array.isArray(parsed.followedUsers) ? parsed.followedUsers.map(u => normalizeTo8DigitHandle(u)) : currentUserProfile.followedUsers,
                            savedPostIds: Array.isArray(parsed.savedPostIds) ? parsed.savedPostIds : [],
                            blockedTags: Array.isArray(parsed.blockedTags) ? parsed.blockedTags : []
                        };
                    }
                }
            } catch (e) {}
            currentUserProfile.handle = persistentHandle;
            currentUserProfile.displayName = 'ID ' + currentUserProfile.handle;
            persistUserPrefs();
            syncProfileInputsAndBadges();
        }

        function persistUserPrefs() {
            try {
                if (/^@\d{8}$/.test(String(currentUserProfile.handle || '').trim())) {
                    localStorage.setItem(PERSISTENT_DEVICE_USER_ID_KEY, String(currentUserProfile.handle).trim());
                }
                localStorage.setItem(USER_PREFS_STORAGE_KEY, JSON.stringify(currentUserProfile));
            } catch (e) {}
        }

        function getActorHandle() {
            if (typeof currentGmailAuthSession === 'object' && currentGmailAuthSession && /^@\d{8}$/.test(String(currentGmailAuthSession.boundHandle || ''))) {
                currentUserProfile.handle = currentGmailAuthSession.boundHandle;
                currentUserProfile.displayName = 'ID ' + currentGmailAuthSession.boundHandle;
                try { localStorage.setItem(PERSISTENT_DEVICE_USER_ID_KEY, currentGmailAuthSession.boundHandle); } catch (e) {}
                return currentGmailAuthSession.boundHandle;
            }
            const persistentHandle = getOrInitPersistentDeviceUserId();
            currentUserProfile.handle = persistentHandle;
            currentUserProfile.displayName = 'ID ' + persistentHandle;
            return persistentHandle;
        }

        window.copyMyUniqueUserId = function() {
            const h = getActorHandle();
            copyTextSafe(h);
            showToast(`Seu ID Único (${h}) foi copiado para a área de transferência!`, 'success');
        };

        function syncProfileInputsAndBadges() {
            const handle = getActorHandle();
            currentUserProfile.handle = handle;
            currentUserProfile.displayName = 'ID ' + handle;
            const h1 = document.getElementById('header-active-handle');
            const h2 = document.getElementById('creator-active-badge');
            if (h1) h1.textContent = handle;
            if (h2) h2.textContent = handle;

            const uEl = document.getElementById('cfg-user-handle');
            const natEl = document.getElementById('cfg-native-lang');
            const lrnEl = document.getElementById('cfg-learning-langs');
            const lgpdEl = document.getElementById('cfg-terms-lgpd-ack');
            const dedEl = document.getElementById('cfg-terms-dedicated-gmail-ack');

            if (uEl) uEl.value = handle;
            if (natEl && currentUserProfile.nativeLang) natEl.value = currentUserProfile.nativeLang;
            if (lrnEl) lrnEl.value = currentUserProfile.learningLangs || '';
            if (lgpdEl) lgpdEl.checked = currentUserProfile.termsAcceptedLgpd !== false;
            if (dedEl) dedEl.checked = currentUserProfile.dedicatedGmailAck !== false;
        }

        window.saveUserProfileConfig = function() {
            const natEl = document.getElementById('cfg-native-lang');
            const lrnEl = document.getElementById('cfg-learning-langs');
            const lgpdEl = document.getElementById('cfg-terms-lgpd-ack');
            const dedEl = document.getElementById('cfg-terms-dedicated-gmail-ack');

            if ((lgpdEl && !lgpdEl.checked) || (dedEl && !dedEl.checked)) {
                showToast('Para salvar suas preferências, mantenha o aceite dos Termos LGPD e de Segurança da Conta marcado.', 'error');
                return;
            }

            if (natEl) currentUserProfile.nativeLang = natEl.value;
            if (lrnEl) currentUserProfile.learningLangs = lrnEl.value.trim();
            if (lgpdEl) currentUserProfile.termsAcceptedLgpd = Boolean(lgpdEl.checked);
            if (dedEl) currentUserProfile.dedicatedGmailAck = Boolean(dedEl.checked);
            currentUserProfile.termsAcceptedAtIso = new Date().toISOString();

            persistUserPrefs();
            syncProfileInputsAndBadges();
            renderUnifiedFeed();
            renderConfigTab();
            
            showToast(`Preferências salvas para o seu ID Único ${currentUserProfile.handle}!`, 'success');
        };

        // Seguir / Deixar de Seguir Tag (gerenciamento completo na guia Perfil/Tags)
        window.toggleFollowTag = function(rawTag) {
            let tag = String(rawTag || '').trim();
            if (!tag) return;
            if (!tag.startsWith('#')) tag = '#' + tag;
            const idx = currentUserProfile.followedTags.findIndex(t => t.toLowerCase() === tag.toLowerCase());
            if (idx >= 0) {
                currentUserProfile.followedTags.splice(idx, 1);
                showToast(`Você deixou de seguir a tag ${tag}.`, 'info');
            } else {
                currentUserProfile.followedTags.push(tag);
                currentUserProfile.blockedTags = currentUserProfile.blockedTags.filter(t => t.toLowerCase() !== tag.toLowerCase());
                showToast(`Agora você segue a tag ${tag}!`, 'success');
            }
            persistUserPrefs();
            renderUnifiedFeed();
            renderConfigTab();
        };

        // Seguir Tag diretamente ao clicar na tag de um Post no Feed (sem deixar de seguir pelo Feed)
        window.followTagFromPost = function(rawTag) {
            let tag = String(rawTag || '').trim();
            if (!tag) return;
            if (!tag.startsWith('#')) tag = '#' + tag;
            const exists = currentUserProfile.followedTags.some(t => t.toLowerCase() === tag.toLowerCase());
            if (exists) {
                showToast(`Você já segue ${tag}. Gerencie ou remova suas tags na guia Perfil/Tags.`, 'info');
                return;
            }
            currentUserProfile.followedTags.push(tag);
            currentUserProfile.blockedTags = currentUserProfile.blockedTags.filter(t => t.toLowerCase() !== tag.toLowerCase());
            showToast(`Agora você segue a tag ${tag}!`, 'success');
            persistUserPrefs();
            renderUnifiedFeed();
            renderConfigTab();
        };

        window.addCustomFollowedTag = function() {
            const inp = document.getElementById('new-follow-tag-input');
            if (!inp || !inp.value.trim()) return;
            let tag = inp.value.trim().replace(/\s+/g, '_');
            if (!tag.startsWith('#')) tag = '#' + tag;
            inp.value = '';
            if (!currentUserProfile.followedTags.some(t => t.toLowerCase() === tag.toLowerCase())) {
                currentUserProfile.followedTags.push(tag);
                persistUserPrefs();
                renderUnifiedFeed();
                renderConfigTab();
                showToast(`Tag ${tag} adicionada às suas tags seguidas!`, 'success');
            }
        };

        window.addCustomBlockedTag = function() {
            const inp = document.getElementById('new-blocked-tag-input');
            if (!inp || !inp.value.trim()) return;
            let tag = inp.value.trim().replace(/\s+/g, '_');
            if (!tag.startsWith('#')) tag = '#' + tag;
            inp.value = '';
            if (!currentUserProfile.blockedTags.some(t => t.toLowerCase() === tag.toLowerCase())) {
                currentUserProfile.blockedTags.push(tag);
                currentUserProfile.followedTags = currentUserProfile.followedTags.filter(t => t.toLowerCase() !== tag.toLowerCase());
                persistUserPrefs();
                renderUnifiedFeed();
                renderConfigTab();
                showToast(`Tag ${tag} bloqueada do seu Feed.`, 'info');
            }
        };

        window.removeBlockedTag = function(tag) {
            currentUserProfile.blockedTags = currentUserProfile.blockedTags.filter(t => t.toLowerCase() !== String(tag).toLowerCase());
            persistUserPrefs();
            renderUnifiedFeed();
            renderConfigTab();
            showToast(`Tag ${tag} desbloqueada.`, 'info');
        };

        function getFollowerCountForHandle(rawHandle) {
            const h = normalizeTo8DigitHandle(rawHandle);
            const base = Number(creatorMetricsStore.followersByHandle[h] || 0);
            const isFollowedByMe = currentUserProfile.followedUsers.some(u => u.toLowerCase() === h.toLowerCase());
            return Math.max(base, isFollowedByMe ? 1 : 0);
        }

        function computeMetricBlindHash16(rawId) {
            const clean = String(rawId || '').trim().toLowerCase().replace(/[^a-z0-9_@-]/g, '');
            const fullHash = typeof computeFastDeterministicHash64 === 'function'
                ? computeFastDeterministicHash64('iuwe_metric_blind_v3:' + clean)
                : clean;
            return 'h_' + String(fullHash).slice(0, 16);
        }

        function getStableDeviceMetricKey() {
            const devId = typeof getOrInitPersistentDeviceUserId === 'function'
                ? getOrInitPersistentDeviceUserId()
                : String(localStorage.getItem(PERSISTENT_DEVICE_USER_ID_KEY) || getActorHandle()).trim();
            return computeMetricBlindHash16(devId);
        }

        function getUniqueTokenSetForRecord(rec, type) {
            const id = rec ? (rec.archiveId || '') : '';
            const set = new Set();
            if (!id) return set;
            const prefix = type === 'down' ? `down_${id}_` : `view_${id}_`;
            const mapObj = type === 'down' ? rec.downloadedByUsers : rec.viewedByUsers;
            if (mapObj && typeof mapObj === 'object') {
                Object.keys(mapObj).forEach(k => {
                    const norm = k.startsWith(prefix) ? k : (prefix + k.replace(/^(view|down)_[^_]+_/, ''));
                    set.add(norm);
                });
            }
            const storeMap = type === 'down' ? creatorMetricsStore.uniqueDownloadersByPostId : creatorMetricsStore.uniqueViewersByPostId;
            const arr = Array.isArray(storeMap?.[id]) ? storeMap[id] : [];
            arr.forEach(k => {
                const s = String(k || '');
                if (s) {
                    const norm = s.startsWith(prefix) ? s : (prefix + s.replace(/^(view|down)_[^_]+_/, ''));
                    set.add(norm);
                }
            });
            return set;
        }

        function getDownloadCountForRecord(rec) {
            if (!rec) return 0;
            return getUniqueTokenSetForRecord(rec, 'down').size;
        }

        function getViewCountForRecord(rec) {
            if (!rec) return 0;
            return getUniqueTokenSetForRecord(rec, 'view').size;
        }

        // Contagem Estrita de Views Única por Conteúdo por Aparelho/ID (APENAS POR INTERAÇÃO ATIVA):
        // Dispara somente quando isInteractiveTrigger === true (tocar áudio, virar Flashcard 3D ou mudar página/termo)
        // Mantém o registro único Blind Hash "view_" + archiveId + "_" + stableDeviceId (máximo 1 view por aparelho por post)!
        function updatePostViewBadgeInDom(archiveId, exactCount) {
            document.querySelectorAll(`[data-view-badge-id="${archiveId}"]`).forEach(el => {
                el.textContent = `👁️ ${exactCount} views`;
            });
            if (typeof renderCreatorReportPanel === 'function' && typeof activeMainTab === 'string' && activeMainTab === 'personal') {
                try { renderCreatorReportPanel(); } catch (e) {}
            }
        }

        window.flipFeedFlashcard3D = function(archiveId, cardEl) {
            if (cardEl && cardEl.classList) {
                cardEl.classList.toggle('is-flipped');
            }
            registerPostRenderedOrExecutedView(archiveId, true);
        };

        function registerPostRenderedOrExecutedView(archiveId, isInteractiveTrigger = false) {
            if (!archiveId || !isInteractiveTrigger) return;
            const devCleanId = getStableDeviceMetricKey();
            const rawDevId = (typeof getOrInitPersistentDeviceUserId === 'function' ? getOrInitPersistentDeviceUserId() : getActorHandle()).replace(/[^a-zA-Z0-9_@-]/g, '');
            const rawActorId = getActorHandle().replace(/[^a-zA-Z0-9_@-]/g, '');
            const actorHashedId = computeMetricBlindHash16(rawActorId);
            const uniqueViewToken = `view_${archiveId}_${devCleanId}`;
            const actorViewToken = `view_${archiveId}_${actorHashedId}`;
            const legacyDevToken = `view_${archiveId}_${rawDevId}`;
            const legacyActorToken = `view_${archiveId}_${rawActorId}`;

            if (!creatorMetricsStore.uniqueViewersByPostId) {
                creatorMetricsStore.uniqueViewersByPostId = {};
            }
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            const tokenSet = rec ? getUniqueTokenSetForRecord(rec, 'view') : new Set(creatorMetricsStore.uniqueViewersByPostId[archiveId] || []);

            if (tokenSet.has(uniqueViewToken) || tokenSet.has(actorViewToken) || tokenSet.has(legacyDevToken) || tokenSet.has(legacyActorToken)) {
                creatorMetricsStore.uniqueViewersByPostId[archiveId] = Array.from(tokenSet);
                if (!creatorMetricsStore.viewsByPostId) creatorMetricsStore.viewsByPostId = {};
                creatorMetricsStore.viewsByPostId[archiveId] = tokenSet.size;
                if (rec) {
                    rec.viewsCount = tokenSet.size;
                    if (rec.publicationMetadata) rec.publicationMetadata.viewsCount = tokenSet.size;
                }
                return;
            }

            tokenSet.add(uniqueViewToken);
            const updatedViewList = Array.from(tokenSet);
            const exactViewsCount = updatedViewList.length;

            creatorMetricsStore.uniqueViewersByPostId[archiveId] = updatedViewList;
            if (!creatorMetricsStore.viewsByPostId) creatorMetricsStore.viewsByPostId = {};
            creatorMetricsStore.viewsByPostId[archiveId] = exactViewsCount;
            saveCreatorMetricsStore();

            const nowIso = new Date().toISOString();
            if (rec) {
                rec.viewedByUsers = rec.viewedByUsers || {};
                rec.viewedByUsers[uniqueViewToken] = nowIso;
                rec.viewsCount = Object.keys(rec.viewedByUsers).length;
                if (rec.publicationMetadata) rec.publicationMetadata.viewsCount = rec.viewsCount;
                saveLocalRecords();
            }
            updatePostViewBadgeInDom(archiveId, rec ? rec.viewsCount : exactViewsCount);

            if (typeof syncRelationalTablesV2 === 'function') {
                syncRelationalTablesV2('creator_metrics_v2/views/' + encodeURIComponent(archiveId), {
                    archiveId,
                    viewsCount: rec ? rec.viewsCount : exactViewsCount,
                    uniqueViewers: updatedViewList,
                    lastViewToken: uniqueViewToken,
                    lastViewerHandle: devCleanId,
                    updatedAtIso: nowIso
                });
            }
            if (rec) {
                const fbUrl = DEFAULT_FIREBASE_URL.trim().replace(/\/+$/, '');
                if (fbUrl) {
                    const patchPayload = JSON.stringify({
                        viewsCount: rec.viewsCount,
                        viewedByUsers: rec.viewedByUsers
                    });
                    remoteCloudFetch(fbUrl + '/audiocasts/' + encodeURIComponent(archiveId) + '.json', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: patchPayload
                    }).catch(() => {});
                    remoteCloudFetch(fbUrl + '/posts/' + encodeURIComponent(archiveId) + '.json', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: patchPayload
                    }).catch(() => {});
                }
            }
        }

        // Contagem Estrita de Downloads Única por Conteúdo por Aparelho/ID:
        // Gera o registro composto único "down_" + archiveId + "_" + stableDeviceId
        // Usa 100% o tamanho real do mapa de tokens únicos (sem somar +1 sobre contadores legados)!
        async function incrementPostDownloadCount(archiveId) {
            if (!archiveId) return;
            const devCleanId = getStableDeviceMetricKey();
            const rawDevId = (typeof getOrInitPersistentDeviceUserId === 'function' ? getOrInitPersistentDeviceUserId() : getActorHandle()).replace(/[^a-zA-Z0-9_@-]/g, '');
            const rawActorId = getActorHandle().replace(/[^a-zA-Z0-9_@-]/g, '');
            const actorHashedId = computeMetricBlindHash16(rawActorId);
            const uniqueDownToken = `down_${archiveId}_${devCleanId}`;
            const actorDownToken = `down_${archiveId}_${actorHashedId}`;
            const legacyDevToken = `down_${archiveId}_${rawDevId}`;
            const legacyActorToken = `down_${archiveId}_${rawActorId}`;

            if (!creatorMetricsStore.uniqueDownloadersByPostId) {
                creatorMetricsStore.uniqueDownloadersByPostId = {};
            }
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            const tokenSet = rec ? getUniqueTokenSetForRecord(rec, 'down') : new Set(creatorMetricsStore.uniqueDownloadersByPostId[archiveId] || []);

            if (tokenSet.has(uniqueDownToken) || tokenSet.has(actorDownToken) || tokenSet.has(legacyDevToken) || tokenSet.has(legacyActorToken)) {
                creatorMetricsStore.uniqueDownloadersByPostId[archiveId] = Array.from(tokenSet);
                creatorMetricsStore.downloadsByPostId[archiveId] = tokenSet.size;
                if (rec) {
                    rec.downloadsCount = tokenSet.size;
                    if (rec.publicationMetadata) rec.publicationMetadata.downloadsCount = tokenSet.size;
                }
                renderUnifiedFeed();
                return;
            }

            tokenSet.add(uniqueDownToken);
            const updatedDownList = Array.from(tokenSet);
            const exactDownCount = updatedDownList.length;

            creatorMetricsStore.uniqueDownloadersByPostId[archiveId] = updatedDownList;
            creatorMetricsStore.downloadsByPostId[archiveId] = exactDownCount;
            saveCreatorMetricsStore();

            const nowIso = new Date().toISOString();
            if (rec) {
                rec.downloadedByUsers = rec.downloadedByUsers || {};
                rec.downloadedByUsers[uniqueDownToken] = nowIso;
                rec.downloadsCount = Object.keys(rec.downloadedByUsers).length;
                if (rec.publicationMetadata) {
                    rec.publicationMetadata.downloadsCount = rec.downloadsCount;
                }
                saveLocalRecords();
            }
            renderUnifiedFeed();
            if (typeof syncRelationalTablesV2 === 'function') {
                syncRelationalTablesV2('creator_metrics_v2/downloads/' + encodeURIComponent(archiveId), {
                    archiveId,
                    downloadsCount: rec ? rec.downloadsCount : exactDownCount,
                    uniqueDownloaders: updatedDownList,
                    lastDownloadToken: uniqueDownToken,
                    lastDownloaderHandle: devCleanId,
                    updatedAtIso: nowIso
                });
            }
            if (rec) {
                const fbUrl = DEFAULT_FIREBASE_URL.trim().replace(/\/+$/, '');
                if (fbUrl) {
                    const patchPayload = JSON.stringify({
                        downloadsCount: rec.downloadsCount,
                        downloadedByUsers: rec.downloadedByUsers
                    });
                    remoteCloudFetch(fbUrl + '/audiocasts/' + encodeURIComponent(archiveId) + '.json', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: patchPayload
                    }).catch(() => {});
                    remoteCloudFetch(fbUrl + '/posts/' + encodeURIComponent(archiveId) + '.json', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: patchPayload
                    }).catch(() => {});
                }
            }
        }

        

        window.addCustomFollowedUserId = function() {
            const inp = document.getElementById('new-follow-userid-input');
            if (!inp || !inp.value.trim()) return;
            const cleanDigits = inp.value.trim().replace(/^@/, '');
            if (!/^\d{8}$/.test(cleanDigits)) {
                showToast('Digite um ID válido contendo exatamente 8 números (ex: 48291037).', 'error');
                return;
            }
            inp.value = '';
            window.toggleFollowUser('@' + cleanDigits);
        };

        // Seguir / Deixar de Seguir ID de Criador (8 dígitos) com rastreamento de seguidores
        window.toggleFollowUser = function(rawHandle) {
            const h = normalizeTo8DigitHandle(rawHandle);
            if (!h) return;
            if (h.toLowerCase() === getActorHandle().toLowerCase()) {
                showToast('Este é o seu próprio ID Único!', 'info');
                return;
            }
            const idx = currentUserProfile.followedUsers.findIndex(u => u.toLowerCase() === h.toLowerCase());
            const prevFollowers = Number(creatorMetricsStore.followersByHandle[h] || 0);
            if (idx >= 0) {
                currentUserProfile.followedUsers.splice(idx, 1);
                creatorMetricsStore.followersByHandle[h] = Math.max(0, prevFollowers - 1);
                showToast(`Você deixou de seguir o criador ${h}.`, 'info');
            } else {
                currentUserProfile.followedUsers.push(h);
                creatorMetricsStore.followersByHandle[h] = prevFollowers + 1;
                showToast(`Agora você segue o criador ${h}! Os materiais dele aparecem no filtro Seguindo.`, 'success');
            }
            saveCreatorMetricsStore();
            persistUserPrefs();
            if (typeof syncRelationalTablesV2 === 'function') {
                syncRelationalTablesV2('creator_metrics_v2/followers/' + encodeURIComponent(h), {
                    creatorId: h,
                    followersCount: creatorMetricsStore.followersByHandle[h],
                    updatedAtIso: new Date().toISOString()
                });
            }
            renderUnifiedFeed();
            renderConfigTab();
        };

        function ensureContactInDirectory(handle, optionalMeta = {}) {
            if (!handle) return;
            let h = String(handle).trim();
            if (!h.startsWith('@')) h = '@' + h;
            if (h.toLowerCase() === getActorHandle().toLowerCase()) return;
            if (!directoryContacts[h]) {
                directoryContacts[h] = {
                    handle: h,
                    name: optionalMeta.name || h.replace(/^@/, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                    nativeLang: optionalMeta.nativeLang || '🌐 Membro da Comunidade IUWE',
                    learningLangs: optionalMeta.learningLangs || '🇨🇦 Inglês • 🇫🇷 Francês • 🇧🇷 Português',
                    bio: optionalMeta.bio || `Criador(a) de conteúdos interativos publicados no Feed da Comunidade IUWE.`,
                    tags: optionalMeta.tags || ['#comunidade', '#idiomas'],
                    status: currentUserProfile.followedUsers.some(u => u.toLowerCase() === h.toLowerCase()) ? 'connected' : 'suggested'
                };
            } else if (Array.isArray(optionalMeta.tags) && optionalMeta.tags.length > 0) {
                const merged = new Set([...(directoryContacts[h].tags || []), ...optionalMeta.tags]);
                directoryContacts[h].tags = Array.from(merged).slice(0, 6);
            }
        }

        // Salvar / Remover Post dos Itens Salvos
        window.isPostSaved = function(archiveId) {
            if (!archiveId || !Array.isArray(currentUserProfile.savedPostIds)) return false;
            return currentUserProfile.savedPostIds.includes(archiveId);
        };

        window.toggleSavePost = function(archiveId) {
            if (!archiveId) return;
            if (typeof isUserGoogleAuthenticated === 'function' && !isUserGoogleAuthenticated()) {
                window.openHybridGoogleAuthModal('Conecte sua Conta Google para salvar este material na sua biblioteca pessoal e acessá-lo em qualquer dispositivo.', archiveId);
                return;
            }
            if (!Array.isArray(currentUserProfile.savedPostIds)) currentUserProfile.savedPostIds = [];
            const idx = currentUserProfile.savedPostIds.indexOf(archiveId);
            if (idx >= 0) {
                currentUserProfile.savedPostIds.splice(idx, 1);
                showToast('Post removido da sua guia Salvos.', 'info');
            } else {
                currentUserProfile.savedPostIds.unshift(archiveId);
                showToast('🔖 Post salvo! Acesse quando quiser na guia Salvos.', 'success');
            }
            persistUserPrefs();
            const handleKey = getActorHandle().replace(/[^a-zA-Z0-9_@-]/g, '_');
            if (typeof syncRelationalTablesV2 === 'function') {
                syncRelationalTablesV2('social_graph/' + encodeURIComponent(handleKey), {
                    handle: getActorHandle(),
                    followedTags: currentUserProfile.followedTags || [],
                    followedUsers: currentUserProfile.followedUsers || [],
                    savedPostIds: currentUserProfile.savedPostIds || [],
                    updatedAtIso: new Date().toISOString()
                });
            }
            
            renderUnifiedFeed();
        };

        window.toggleMultiFilterOption = function(category, value, forceAddOnly = false) {
            if (!multiFilterState[category]) return;
            const arr = multiFilterState[category];
            const idx = arr.findIndex(v => v.toLowerCase() === String(value).toLowerCase());
            if (idx >= 0) {
                if (!forceAddOnly) arr.splice(idx, 1);
            } else {
                arr.push(String(value));
            }
            renderUnifiedFeed();
        };

        window.clearSingleMultiFilter = function(category) {
            if (!multiFilterState[category]) return;
            multiFilterState[category] = [];
            renderUnifiedFeed();
        };

        window.resetFeedFilters = function() {
            const s = document.getElementById('feed-search-input'); if (s) s.value = '';
            multiFilterState.format = [];
            multiFilterState.user = [];
            multiFilterState.tag = [];
            multiFilterState.lang = [];
            multiFilterState.level = [];
            document.querySelectorAll('.multi-filter-dropdown').forEach(d => { d.open = false; });
            renderUnifiedFeed();
        };

        // Fecha dropdowns de múltiplas opções ao clicar fora
        document.addEventListener('click', (evt) => {
            document.querySelectorAll('.multi-filter-dropdown[open]').forEach(d => {
                if (!d.contains(evt.target)) d.open = false;
            });
        });

        // Navegação entre as 6 Guias Principais
        window.switchMainTab = function(tabName) {
            if (tabName === 'messages' || tabName === 'contacts') tabName = 'public';
            activeMainTab = tabName;
            stopActiveAudioAndSlideshow();

            const tabConfig = [
                { id: 'public', btn: 'main-tab-public', activeClass: 'iuwe-selected-blue w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 shadow-sm border', idleClass: 'w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 text-iuwe-blue bg-white hover:bg-iuwe-purple border border-iuwe-purpleBorder' },
                { id: 'personal', btn: 'main-tab-personal', activeClass: 'iuwe-selected-blue w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 shadow-sm border', idleClass: 'w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 text-iuwe-blue bg-white hover:bg-iuwe-purple border border-iuwe-purpleBorder' },
                { id: 'create', btn: 'main-tab-create', activeClass: 'iuwe-selected-blue w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 shadow-sm border', idleClass: 'w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 text-iuwe-blue bg-white hover:bg-iuwe-purple border border-iuwe-purpleBorder' },
                { id: 'contacts', btn: 'main-tab-contacts', activeClass: 'iuwe-selected-blue w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 shadow-sm border', idleClass: 'w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 text-iuwe-blue bg-white hover:bg-iuwe-purple border border-iuwe-purpleBorder' },
                { id: 'saved', btn: 'main-tab-saved', activeClass: 'iuwe-selected-blue w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 shadow-sm border', idleClass: 'w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 text-iuwe-blue bg-white hover:bg-iuwe-purple border border-iuwe-purpleBorder' },
                { id: 'config', btn: 'main-tab-config', activeClass: 'iuwe-selected-blue w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 shadow-sm border', idleClass: 'w-full py-2 px-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold transition flex items-center justify-center gap-1 text-iuwe-blue bg-white hover:bg-iuwe-purple border border-iuwe-purpleBorder' }
            ];

            tabConfig.forEach(t => {
                const el = document.getElementById(t.btn);
                if (el) el.className = (t.id === tabName) ? t.activeClass : t.idleClass;
            });

            const secFeed = document.getElementById('view-feed-section');
            const secCreate = document.getElementById('view-create-section');
            
            const secConfig = document.getElementById('view-config-section');

            if (secFeed) secFeed.classList.toggle('hidden', !(tabName === 'public' || tabName === 'personal' || tabName === 'saved'));
            if (secCreate) secCreate.classList.toggle('hidden', tabName !== 'create');
            
            
            if (secConfig) secConfig.classList.toggle('hidden', tabName !== 'config');
            const calloutEl = document.getElementById('hybrid-unauth-callout-banner');
            if (calloutEl) calloutEl.classList.toggle('hidden', (typeof isUserGoogleAuthenticated === 'function' && isUserGoogleAuthenticated()) || !(tabName === 'personal' || tabName === 'saved'));

            const publicSubbar = document.getElementById('public-feed-subbar');
            const personalSubbar = document.getElementById('personal-feed-subbar');
            const heading = document.getElementById('feed-mode-heading');
            const subtitle = document.getElementById('feed-mode-subtitle');

            if (tabName === 'public') {
                if (publicSubbar) publicSubbar.classList.remove('hidden');
                if (personalSubbar) personalSubbar.classList.add('hidden');
                if (heading) heading.innerHTML = `<i class="fa-solid fa-earth-americas text-iuwe-blue"></i> <span>${uiT('feedPublicHeading')}</span>`;
                if (subtitle) subtitle.innerHTML = uiT('feedPublicSub');
                renderUnifiedFeed();
            } else if (tabName === 'personal') {
                if (typeof isUserGoogleAuthenticated === 'function' && !isUserGoogleAuthenticated()) {
                    window.openHybridGoogleAuthModal('Conecte sua Conta Google para manter o histórico permanente de tudo o que você produz e acompanhar seu Relatório de Criador.');
                }
                if (publicSubbar) publicSubbar.classList.add('hidden');
                if (personalSubbar) personalSubbar.classList.remove('hidden');
                if (heading) heading.innerHTML = `<i class="fa-solid fa-user-check text-purple-700"></i> <span>${uiT('feedPersonalHeading')} (${escapeHtml(getActorHandle())})</span>`;
                if (subtitle) subtitle.innerHTML = uiT('feedPersonalSub');
                renderUnifiedFeed();
            } else if (tabName === 'saved') {
                if (typeof isUserGoogleAuthenticated === 'function' && !isUserGoogleAuthenticated()) {
                    window.openHybridGoogleAuthModal('Conecte sua Conta Google para acessar e sincronizar seus materiais salvos em qualquer celular ou computador.');
                }
                if (publicSubbar) publicSubbar.classList.add('hidden');
                if (personalSubbar) personalSubbar.classList.add('hidden');
                if (heading) heading.innerHTML = `<i class="fa-solid fa-bookmark text-sky-500"></i> <span>${uiT('feedSavedHeading')}</span>`;
                if (subtitle) subtitle.innerHTML = uiT('feedSavedSub');
                renderUnifiedFeed();
            } else if (tabName === 'contacts') {
                renderContactsTab();
            } else if (tabName === 'config') {
                renderConfigTab();
            }
        };

        window.setPublicFeedFilter = function(mode) {
            publicFeedSubfilter = mode === 'following' ? 'following' : 'all';
            const bAll = document.getElementById('btn-public-all');
            const bFol = document.getElementById('btn-public-following');
            if (bAll) {
                bAll.className = publicFeedSubfilter === 'all'
                    ? 'iuwe-selected-white px-3 py-1 rounded-lg border font-extrabold text-[10.5px] shadow-2xs'
                    : 'px-3 py-1 rounded-lg bg-white text-purple-500 border border-iuwe-purpleBorder font-extrabold text-[10.5px]';
            }
            if (bFol) {
                bFol.className = publicFeedSubfilter === 'following'
                    ? 'iuwe-selected-white px-3 py-1 rounded-lg border font-extrabold text-[10.5px] shadow-2xs'
                    : 'px-3 py-1 rounded-lg bg-white text-purple-500 border border-iuwe-purpleBorder font-extrabold text-[10.5px]';
            }
            renderUnifiedFeed();
        };

        window.setPersonalFeedFilter = function(mode) {
            if (mode === 'following') {
                switchMainTab('public');
                setPublicFeedFilter('following');
                return;
            }
            personalFeedSubfilter = 'mine';
            renderUnifiedFeed();
        };

        window.selectCreationTool = function(toolKey) {
            activeCreationTool = toolKey;
            const tools = [
                { k: 'audiocast', card: 'tool-card-audiocast', box: 'builder-box-audiocast' },
                { k: 'flashcard', card: 'tool-card-flashcard', box: 'builder-box-flashcard' },
                { k: 'livreto', card: 'tool-card-livreto', box: 'builder-box-livreto' },
                { k: 'vocabulario', card: 'tool-card-vocabulario', box: 'builder-box-vocabulario' }
            ];
            tools.forEach(t => {
                const cEl = document.getElementById(t.card);
                const bEl = document.getElementById(t.box);
                if (cEl) {
                    cEl.className = (t.k === toolKey)
                        ? 'iuwe-selected-blue p-2.5 rounded-xl border-2 text-left transition flex flex-col justify-between shadow-sm'
                        : 'p-2.5 rounded-xl border-2 text-left transition flex flex-col justify-between bg-white text-slate-900 border-iuwe-purpleBorder hover:bg-iuwe-purple/40';
                }
                if (bEl) {
                    bEl.classList.toggle('hidden', t.k !== toolKey);
                }
            });
        };

        // ============================================================================
        // 3. MOTOR COMPARTILHADO DE IA, TRADUÇÃO E ÁUDIO NEURAL 24KHZ SEM RUÍDO
        // ============================================================================
        const TEXT_MODELS = [
            'gemini-3.5-flash-lite',
            'gemini-3.1-flash-lite',
            'gemini-3.8-flash',
            'gemini-3-flash-preview',
            'gemini-2.5-flash-lite',
            'gemini-2.5-flash'
        ];
        let textCursor = 0;

        const RASTER_IMAGE_MODELS = [
            'gemini-2.5-flash-image',
            'gemini-2.0-flash-exp-image-generation',
            'gemini-2.0-flash-preview-image-generation'
        ];

        const LANG_LABELS = {
            'pt-BR': '🇧🇷 Português (BR)',
            'en-CA': '🇨🇦 Inglês Canadense (CA)',
            'fr-CA': '🇨🇦 Francês Québécois (CA)',
            'en-US': '🇺🇸 Inglês (EUA)',
            'en-GB': '🇬🇧 Inglês Britânico (UK)',
            'es-419': '🌎 Espanhol Sul-Americano',
            'es-MX': '🇲🇽 Espanhol Mexicano (MX)',
            'es-ES': '🇪🇸 Espanhol (Espanha)',
            'fr-FR': '🇫🇷 Francês (França)',
            'pt-PT': '🇵🇹 Português (PT)',
            'de-DE': '🇩🇪 Alemão',
            'it-IT': '🇮🇹 Italiano',
            'ja-JP': '🇯🇵 Japonês'
        };

        const LANG_ENGLISH_NAMES = {
            'en-US': 'American English (United States)',
            'en-CA': 'Canadian English (Canada)',
            'en-GB': 'British English (United Kingdom)',
            'es-419': 'South American Spanish (South America / Latin America)',
            'es-MX': 'Mexican Spanish (Mexico)',
            'es-ES': 'European Spanish (Spain)',
            'fr-CA': 'Québécois French (Canadian French from Québec)',
            'fr-FR': 'Metropolitan French (France)',
            'pt-BR': 'Brazilian Portuguese (Brazil)',
            'pt-PT': 'European Portuguese (Portugal)',
            'de-DE': 'German (Germany)',
            'it-IT': 'Italian (Italy)',
            'ja-JP': 'Japanese (Japan)'
        };

        const REGIONAL_STYLE_NOTES = {
            'en-US': 'Use natural American English vocabulary and phrasing.',
            'en-CA': 'Use natural Canadian English vocabulary and phrasing.',
            'en-GB': 'Use natural British English vocabulary and phrasing.',
            'es-419': 'Use natural South American Spanish vocabulary and phrasing.',
            'es-MX': 'Use natural Mexican Spanish vocabulary and phrasing.',
            'es-ES': 'Use natural European Spanish (Spain) vocabulary and phrasing.',
            'fr-CA': 'Use natural Québécois French (Canadian French from Québec) vocabulary and phrasing.',
            'fr-FR': 'Use natural Metropolitan French (France) vocabulary and phrasing.',
            'pt-BR': 'Use natural Brazilian Portuguese vocabulary and phrasing.',
            'pt-PT': 'Use natural European Portuguese (Portugal) vocabulary and phrasing.'
        };

        function populateAllLanguageSelects() {
            const html = Object.keys(LANG_LABELS).map(code => `<option value="${code}">${escapeHtml(typeof translateLangLabel === 'function' ? translateLangLabel(code, LANG_LABELS[code]) : LANG_LABELS[code])}</option>`).join('');
            document.querySelectorAll('.lang-select-populate').forEach(sel => {
                sel.innerHTML = html;
            });
            const acLang = document.getElementById('ac-lang-select');
            if (acLang) acLang.value = 'en-CA';
            const fcLang = document.getElementById('fc-front-lang');
            if (fcLang) fcLang.value = 'pt-BR';
        }

        function base64ToArrayBuffer(base64) {
            const bin = atob(base64);
            const bytes = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
            return bytes.buffer;
        }

        function arrayBufferToBase64(buffer) {
            const bytes = new Uint8Array(buffer);
            let binary = '';
            const chunk = 8192;
            for (let i = 0; i < bytes.length; i += chunk) {
                binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
            }
            return btoa(binary);
        }

        async function blobToDataUrl(blob) {
            if (!blob) return '';
            const buf = await blob.arrayBuffer();
            return 'data:audio/wav;base64,' + arrayBufferToBase64(buf);
        }

        function extractCleanPcm16(rawBuffer, defaultSampleRate = 24000) {
            const bytes = new Uint8Array(rawBuffer);
            const view = new DataView(rawBuffer);
            let sampleRate = defaultSampleRate;
            let audioStart = 0;
            let audioEnd = bytes.byteLength;

            function readFourCC(offset) {
                if (offset + 4 > bytes.byteLength) return '';
                return String.fromCharCode(bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3]);
            }

            if (bytes.byteLength >= 44 && readFourCC(0) === 'RIFF' && readFourCC(8) === 'WAVE') {
                let offset = 12;
                while (offset + 8 <= bytes.byteLength) {
                    const id = readFourCC(offset);
                    const size = view.getUint32(offset + 4, true);
                    const body = offset + 8;
                    if (id === 'fmt ' && size >= 16 && body + 16 <= bytes.byteLength) {
                        const sr = view.getUint32(body + 4, true);
                        if (sr >= 8000 && sr <= 96000) sampleRate = sr;
                    } else if (id === 'data') {
                        audioStart = body;
                        audioEnd = Math.min(bytes.byteLength, body + size);
                        break;
                    }
                    offset = body + size + (size % 2);
                }
            }

            const scanStart = Math.max(audioStart, audioEnd - 24576);
            for (let i = scanStart; i < audioEnd - 4; i++) {
                const b0 = bytes[i], b1 = bytes[i + 1], b2 = bytes[i + 2], b3 = bytes[i + 3];
                const isC2PA = (b0 === 0x43 && b1 === 0x32 && b2 === 0x50 && b3 === 0x41) ||
                               (b0 === 0x63 && b1 === 0x32 && b2 === 0x70 && b3 === 0x61) ||
                               (b0 === 0x6A && b1 === 0x75 && b2 === 0x6D && b3 === 0x62) ||
                               (b0 === 0x6A && b1 === 0x75 && b2 === 0x6D && b3 === 0x64);
                if (isC2PA) {
                    audioEnd = Math.max(audioStart, i - 64);
                    break;
                }
            }

            let byteLen = Math.max(0, audioEnd - audioStart);
            byteLen -= (byteLen % 2);
            const cleanCopy = new ArrayBuffer(byteLen);
            new Uint8Array(cleanCopy).set(bytes.subarray(audioStart, audioStart + byteLen));
            const pcm16 = new Int16Array(cleanCopy);

            const fadeInLen = Math.min(240, Math.floor(pcm16.length / 8));
            for (let i = 0; i < fadeInLen; i++) {
                const gain = 0.5 * (1 - Math.cos(Math.PI * (i / fadeInLen)));
                pcm16[i] = Math.round(pcm16[i] * gain);
            }
            const fadeOutLen = Math.min(840, Math.floor(pcm16.length / 6));
            for (let i = 0; i < fadeOutLen; i++) {
                const gain = 0.5 * (1 - Math.cos(Math.PI * (i / fadeOutLen)));
                const idx = pcm16.length - 1 - i;
                pcm16[idx] = Math.round(pcm16[idx] * gain);
            }
            return { pcm16, sampleRate };
        }

        async function applyCleanPlaybackSpeedToPcm(pcm16, sampleRate, speedFactor) {
            const spd = Math.max(0.5, Math.min(2.0, parseFloat(speedFactor) || 1.0));
            if (Math.abs(spd - 1.0) < 0.02) return pcm16;

            try {
                if (window.OfflineAudioContext || window.webkitOfflineAudioContext) {
                    const OfflineCtx = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                    const outLength = Math.max(1, Math.floor(pcm16.length / spd));
                    const offlineCtx = new OfflineCtx(1, outLength, sampleRate);
                    const srcBuffer = offlineCtx.createBuffer(1, pcm16.length, sampleRate);
                    const ch = srcBuffer.getChannelData(0);
                    for (let i = 0; i < pcm16.length; i++) {
                        ch[i] = pcm16[i] / 32768.0;
                    }
                    const source = offlineCtx.createBufferSource();
                    source.buffer = srcBuffer;
                    source.playbackRate.value = spd;
                    source.connect(offlineCtx.destination);
                    source.start(0);
                    const rendered = await offlineCtx.startRendering();
                    const outFloat = rendered.getChannelData(0);
                    const outPcm = new Int16Array(outFloat.length);
                    for (let i = 0; i < outFloat.length; i++) {
                        const sv = Math.max(-1, Math.min(1, outFloat[i]));
                        outPcm[i] = sv < 0 ? Math.round(sv * 32768) : Math.round(sv * 32767);
                    }
                    return outPcm;
                }
            } catch (e) {}

            const outLen = Math.max(1, Math.floor(pcm16.length / spd));
            const out = new Int16Array(outLen);
            for (let i = 0; i < outLen; i++) {
                const pos = i * spd;
                const idx0 = Math.floor(pos);
                const idx1 = Math.min(pcm16.length - 1, idx0 + 1);
                const frac = pos - idx0;
                out[i] = Math.round(pcm16[idx0] * (1 - frac) + pcm16[idx1] * frac);
            }
            return out;
        }

        function pcmToWavBlob(pcm16, sampleRate = 24000) {
            const buffer = new ArrayBuffer(44 + pcm16.length * 2);
            const view = new DataView(buffer);
            function writeStr(off, s) {
                for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
            }
            writeStr(0, 'RIFF');
            view.setUint32(4, 36 + pcm16.length * 2, true);
            writeStr(8, 'WAVE');
            writeStr(12, 'fmt ');
            view.setUint32(16, 16, true);
            view.setUint16(20, 1, true);
            view.setUint16(22, 1, true);
            view.setUint32(24, sampleRate, true);
            view.setUint32(28, sampleRate * 2, true);
            view.setUint16(32, 2, true);
            view.setUint16(34, 16, true);
            writeStr(36, 'data');
            view.setUint32(40, pcm16.length * 2, true);

            let offset = 44;
            for (let i = 0; i < pcm16.length; i++, offset += 2) {
                view.setInt16(offset, pcm16[i], true);
            }
            return new Blob([buffer], { type: 'audio/wav' });
        }

        // Modelos TTS com cota gratuita (Free Tier) no Google AI Studio em ordem de prioridade e throughput:
        const TTS_MODELS = [
            'gemini-3.8-flash-lite-tts',
            'gemini-3.8-flash-tts',
            'gemini-3.1-flash-tts-preview',
            'gemini-2.5-flash-preview-tts'
        ];
        let ttsCursor = 0;

        // Controle por modelo e Fila de Prioridade com bloqueio temporário de 60s pós-limite (Anti-429 cascata):
        const IUWE_RATE_LIMIT_LOCK_SECONDS = 60;
        const IUWE_MIN_CALL_INTERVAL_MS = 4000;
        const IUWE_SAME_MODEL_MIN_INTERVAL_MS = 19500; // ~3 RPM por modelo individual no Free Tier
        const ttsModelCooldownUntilMs = {};
        const ttsModelLastCallAtMs = {};
        const ttsModelDisabledInSession = {};
        const textModelCooldownUntilMs = {};
        let lastGlobalAiCallFinishedAtMs = 0;
        let iuweBatchGenerationActive = false;

        // Fila de Prioridade de Recursos da API Gemini:
        // Prioridade 1 (Alta): Geração de Frases do Vocabulário IA & Geração de Áudio Individual
        // Prioridade 2 (Normal/Lote): Geração de Áudios em Lote ("Gerar Todos")
        const iuweAiPriorityQueue = [];
        let iuweAiQueueWorkerRunning = false;
        let iuweAiQueueSeq = 0;

        function enqueueGeminiPriorityCall(taskFn, priority = 1, label = 'API') {
            return new Promise((resolve, reject) => {
                iuweAiPriorityQueue.push({
                    seq: ++iuweAiQueueSeq,
                    priority: Number(priority) || 1,
                    label,
                    taskFn,
                    resolve,
                    reject
                });
                iuweAiPriorityQueue.sort((a, b) => (a.priority - b.priority) || (a.seq - b.seq));
                processGeminiPriorityQueue();
            });
        }

        async function processGeminiPriorityQueue() {
            if (iuweAiQueueWorkerRunning) return;
            iuweAiQueueWorkerRunning = true;
            try {
                while (iuweAiPriorityQueue.length > 0) {
                    const remLockSec = typeof getRemainingCooldownSeconds === 'function' ? getRemainingCooldownSeconds() : 0;
                    if (remLockSec > 0) {
                        const err = new Error(`⏳ Bloqueio temporário anti-limite ativo: aguarde ${remLockSec}s antes de enviar nova tentativa à Google.`);
                        while (iuweAiPriorityQueue.length > 0) {
                            const item = iuweAiPriorityQueue.shift();
                            item.reject(err);
                        }
                        break;
                    }
                    const elapsedSinceLast = Date.now() - lastGlobalAiCallFinishedAtMs;
                    if (lastGlobalAiCallFinishedAtMs > 0 && elapsedSinceLast < IUWE_MIN_CALL_INTERVAL_MS) {
                        await new Promise(r => setTimeout(r, IUWE_MIN_CALL_INTERVAL_MS - elapsedSinceLast));
                    }
                    const nextItem = iuweAiPriorityQueue.shift();
                    if (!nextItem) break;
                    try {
                        const result = await nextItem.taskFn();
                        lastGlobalAiCallFinishedAtMs = Date.now();
                        nextItem.resolve(result);
                    } catch (err) {
                        lastGlobalAiCallFinishedAtMs = Date.now();
                        nextItem.reject(err);
                    }
                }
            } finally {
                iuweAiQueueWorkerRunning = false;
            }
        }

        // Tradução 100% Gratuita (Zero consumo de chamadas da Chave API Gemini!):
        // Preserva toda a cota da chave API exclusivamente para o Gerador de Frases do Vocabulário IA e para os Áudios TTS.
        async function translateTextWithGemini(rawText, langCode, targetLangName, apiKey) {
            const cleanInput = (rawText || '').trim();
            if (!cleanInput) return '';

            const tlMap = {
                'en-US': 'en', 'en-CA': 'en', 'en-GB': 'en',
                'es-419': 'es', 'es-MX': 'es', 'es-ES': 'es',
                'fr-CA': 'fr', 'fr-FR': 'fr',
                'pt-BR': 'pt', 'pt-PT': 'pt',
                'de-DE': 'de', 'it-IT': 'it', 'ja-JP': 'ja'
            };
            const tl = tlMap[langCode] || String(langCode || 'en').split('-')[0];

            for (let attempt = 0; attempt < 3; attempt++) {
                try {
                    const gtxRes = await window.fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(tl)}&dt=t&q=${encodeURIComponent(cleanInput)}`, { method: 'GET' });
                    if (gtxRes.ok) {
                        const gtxData = await gtxRes.json();
                        if (Array.isArray(gtxData) && Array.isArray(gtxData[0])) {
                            let t = gtxData[0].map(seg => (Array.isArray(seg) ? seg[0] : '')).join('').trim();
                            t = t.replace(/\bsvp\b/gi, "s'il vous plaît").replace(/\bstp\b/gi, "s'il te plaît");
                            if (t) return t;
                        }
                    }
                } catch (e) {}
                if (attempt < 2) {
                    await new Promise(r => setTimeout(r, 450 * (attempt + 1)));
                }
            }

            throw new Error('Não foi possível traduzir automaticamente para ' + (targetLangName || langCode) + '. Verifique sua conexão.');
        }

        async function synthesizeCleanPcmWithGemini(spokenText, voiceName, apiKey, priorityLevel = null) {
            const remLock = typeof getRemainingCooldownSeconds === 'function' ? getRemainingCooldownSeconds() : 0;
            if (remLock > 0) {
                throw new Error(`⏳ Proteção de 60s da API ativa: aguarde ${remLock}s antes de enviar qualquer nova tentativa.`);
            }

            const activeKey = apiKey || (await secureKeyVault.getApiKey());
            if (!activeKey) {
                if (typeof window.toggleApiKeyModal === 'function') window.toggleApiKeyModal();
                throw new Error('Ative sua Chave de API Gemini gratuita no botão "Chave API" do topo para sintetizar o áudio neural 24kHz sem ruído!');
            }

            const effectivePriority = priorityLevel !== null ? priorityLevel : (iuweBatchGenerationActive ? 2 : 1);

            return enqueueGeminiPriorityCall(async () => {
                const payload = {
                    contents: [{ parts: [{ text: spokenText }] }],
                    generationConfig: {
                        responseModalities: ['AUDIO'],
                        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceName || 'Zephyr' } } }
                    }
                };

                let sawRateLimit429 = false;
                const startCursor = ttsCursor;

                for (let m = 0; m < TTS_MODELS.length; m++) {
                    const idx = (startCursor + m) % TTS_MODELS.length;
                    const model = TTS_MODELS[idx];

                    if (ttsModelDisabledInSession[model]) continue;
                    const now = Date.now();
                    if (ttsModelCooldownUntilMs[model] && now < ttsModelCooldownUntilMs[model]) {
                        sawRateLimit429 = true;
                        continue;
                    }

                    // Se este modelo específico foi chamado há menos de ~19,5s, verifica se há outro modelo livre na rotação;
                    // caso todos tenham sido usados recentemente, aguarda o tempo restante para respeitar os 3 RPM por modelo.
                    const lastUsed = ttsModelLastCallAtMs[model] || 0;
                    if (lastUsed > 0 && (now - lastUsed) < IUWE_SAME_MODEL_MIN_INTERVAL_MS) {
                        const hasAnotherReadyModel = TTS_MODELS.some((altModel, altIdx) => {
                            if (altIdx === idx || ttsModelDisabledInSession[altModel]) return false;
                            if (ttsModelCooldownUntilMs[altModel] && now < ttsModelCooldownUntilMs[altModel]) return false;
                            const altLast = ttsModelLastCallAtMs[altModel] || 0;
                            return (now - altLast) >= IUWE_SAME_MODEL_MIN_INTERVAL_MS;
                        });
                        if (hasAnotherReadyModel) {
                            continue;
                        }
                        const waitNeeded = IUWE_SAME_MODEL_MIN_INTERVAL_MS - (now - lastUsed);
                        if (waitNeeded > 0 && waitNeeded <= 15000) {
                            await new Promise(r => setTimeout(r, waitNeeded));
                        }
                    }

                    // Avança sempre o cursor para distribuir as chamadas entre os modelos gratuitos
                    ttsCursor = (idx + 1) % TTS_MODELS.length;
                    ttsModelLastCallAtMs[model] = Date.now();

                    try {
                        const res = await window.fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'x-goog-api-key': activeKey },
                            body: JSON.stringify(payload)
                        });

                        if (res.ok) {
                            const data = await res.json();
                            const part = data?.candidates?.[0]?.content?.parts?.[0];
                            const b64 = part?.inlineData?.data;
                            const mime = part?.inlineData?.mimeType || 'audio/L16;rate=24000';
                            if (b64) {
                                const rateMatch = mime.match(/rate=(\d+)/);
                                const defaultRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;
                                return extractCleanPcm16(base64ToArrayBuffer(b64), defaultRate);
                            }
                        }

                        if (res.status === 404) {
                            // Modelo desligado ou indisponível para o projeto: desativa na sessão e tenta o próximo imediatamente
                            ttsModelDisabledInSession[model] = true;
                            continue;
                        }

                        if (res.status === 429) {
                            sawRateLimit429 = true;
                            ttsModelCooldownUntilMs[model] = Date.now() + (IUWE_RATE_LIMIT_LOCK_SECONDS * 1000);
                            // Não dá break! Tenta imediatamente o próximo modelo gratuito da rotação
                            continue;
                        }
                    } catch (e) {
                        continue;
                    }
                }

                // Se chegou aqui e houve 429 em todos os modelos disponíveis, aplica bloqueio temporário global de 60 segundos
                if (sawRateLimit429 && typeof startCooldownTicker === 'function') {
                    startCooldownTicker(IUWE_RATE_LIMIT_LOCK_SECONDS, 'Limite de chamadas da Google atingido — bloqueio temporário de 60s ativado para proteger sua chave.');
                    throw new Error('⏳ Limite por minuto/dia da API Gemini atingido nos modelos de voz. Bloqueio preventivo de 60 segundos ativado antes de nova tentativa.');
                }

                throw new Error('Não foi possível sintetizar o áudio agora. Verifique sua Chave de API ou aguarde a liberação da fila.');
            }, effectivePriority, 'TTS_AUDIO');
        }

        function createContextualSceneDataUrl(promptText, slideIndex = 0) {
            const c = document.createElement('canvas');
            c.width = 800;
            c.height = 450;
            const ctx = c.getContext('2d');
            const lower = String(promptText || '').toLowerCase();

            if (/caf|croissant|restaurante|mesa|padaria|montreal|bistr/i.test(lower)) {
                const wallGrad = ctx.createLinearGradient(0, 0, 0, 450);
                wallGrad.addColorStop(0, '#3b1d11');
                wallGrad.addColorStop(0.65, '#5c2d16');
                wallGrad.addColorStop(1, '#2a1208');
                ctx.fillStyle = wallGrad;
                ctx.fillRect(0, 0, 800, 450);

                const skyGrad = ctx.createLinearGradient(70, 35, 70, 275);
                skyGrad.addColorStop(0, '#0f172a');
                skyGrad.addColorStop(0.6, '#1e3a8a');
                skyGrad.addColorStop(1, '#93c5fd');
                ctx.fillStyle = skyGrad;
                ctx.fillRect(70, 35, 430, 235);

                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(70, 250, 430, 20);
                for (let i = 0; i < 24; i++) {
                    ctx.beginPath();
                    ctx.arc(90 + (i * 47) % 390, 50 + (i * 73) % 195, 3 + (i % 3), 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.strokeStyle = '#78350f';
                ctx.lineWidth = 10;
                ctx.strokeRect(70, 35, 430, 235);

                const tableGrad = ctx.createLinearGradient(0, 290, 0, 450);
                tableGrad.addColorStop(0, '#9a3412');
                tableGrad.addColorStop(1, '#431407');
                ctx.fillStyle = tableGrad;
                ctx.fillRect(0, 290, 800, 160);

                ctx.fillStyle = '#ffffff';
                ctx.fillRect(220, 300, 110, 70);
                ctx.fillStyle = '#b45309';
                ctx.beginPath(); ctx.ellipse(275, 300, 52, 12, 0, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#f59e0b';
                ctx.beginPath(); ctx.ellipse(545, 362, 68, 30, -0.15, 0, Math.PI * 2); ctx.fill();
                return typeof encodeCompactCanvasDataUrl === 'function' ? encodeCompactCanvasDataUrl(c, 0.65) : c.toDataURL('image/webp', 0.65);
            }

            const palettes = [
                ['#0f172a', '#1e40af', '#60a5fa', '#fbbf24', '#10b981'],
                ['#3b0764', '#7e22ce', '#f472b6', '#fde047', '#14b8a6'],
                ['#064e3b', '#0d9488', '#67e8f9', '#f59e0b', '#22c55e']
            ];
            const pal = palettes[slideIndex % palettes.length];
            const g = ctx.createLinearGradient(0, 0, 0, 450);
            g.addColorStop(0, pal[0]);
            g.addColorStop(0.55, pal[1]);
            g.addColorStop(1, pal[2]);
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, 800, 450);
            ctx.fillStyle = pal[3];
            ctx.beginPath(); ctx.arc(640, 110, 52, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = pal[4];
            ctx.beginPath();
            ctx.moveTo(0, 380); ctx.quadraticCurveTo(240, 310, 480, 370); ctx.quadraticCurveTo(660, 410, 800, 355);
            ctx.lineTo(800, 450); ctx.lineTo(0, 450); ctx.closePath(); ctx.fill();
            return typeof encodeCompactCanvasDataUrl === 'function' ? encodeCompactCanvasDataUrl(c, 0.65) : c.toDataURL('image/webp', 0.65);
        }

        function encodeCompactCanvasDataUrl(canvas, quality = 0.65) {
            try {
                const webpUrl = canvas.toDataURL('image/webp', quality);
                if (webpUrl && webpUrl.startsWith('data:image/webp')) {
                    return webpUrl;
                }
            } catch (e) {}
            return canvas.toDataURL('image/jpeg', quality);
        }

        function compressImageDataUrl(rawDataUrl, maxWidth = 560, maxHeight = 315, quality = 0.65) {
            return new Promise(resolve => {
                if (!rawDataUrl || typeof rawDataUrl !== 'string') {
                    resolve('');
                    return;
                }
                const img = new Image();
                img.onload = () => {
                    const c = document.createElement('canvas');
                    c.width = maxWidth;
                    c.height = maxHeight;
                    const ctx = c.getContext('2d');
                    ctx.fillStyle = '#0f172a';
                    ctx.fillRect(0, 0, maxWidth, maxHeight);
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                    const scale = Math.max(maxWidth / (img.width || maxWidth), maxHeight / (img.height || maxHeight));
                    const drawW = (img.width || maxWidth) * scale;
                    const drawH = (img.height || maxHeight) * scale;
                    const offsetX = (maxWidth - drawW) / 2;
                    const offsetY = (maxHeight - drawH) / 2;
                    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
                    resolve(encodeCompactCanvasDataUrl(c, quality));
                };
                img.onerror = () => resolve(rawDataUrl);
                img.src = rawDataUrl;
            });
        }

        // ============================================================================
        // 4. COMPILADORES .HTML OFFLINE DOS FORMATOS INTERATIVOS (FLASHCARD, LIVRETO, VOCAB)
        // ============================================================================
        function buildCompiledFlashcardSlideHtml(rec) {
            const meta = rec.publicationMetadata || {};
            const fc = meta.flashcardData || {};
            const cs = fc.cardStyle || meta.cardStyle || { bgColor: '#1e1b4b', textColor: '#ffffff' };
            const front = fc.frontSide || { langLabel: '🇧🇷 Principal', text: meta.summarySource || meta.title || '', hint: '', audioBase64: '' };
            const backs = Array.isArray(fc.backTranslations) && fc.backTranslations.length > 0
                ? fc.backTranslations
                : [{ langLabel: '🌐 Tradução', text: meta.summarySpoken || '', phoneticOrNote: '', audioBase64: '' }];
            const masterAudioB64 = rec.generatedWavBase64 || '';
            const creatorHandle = rec.creatorMetadata?.handle || '@estudante_iuwe';

            return `<!DOCTYPE html>
<\x68tml lang="pt-BR">
<\x68ead>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IUWE Slide Flashcard 3D • ${escapeHtml(rec.archiveId)}</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 20px; min-height: 100vh; font-family: 'Montserrat', sans-serif; background: radial-gradient(circle at top, #2e1065, #0f172a 70%); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .deck-bar { width: 100%; max-width: 780px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: 16px; padding: 12px 18px; }
  .btn { cursor: pointer; border: none; border-radius: 12px; padding: 10px 16px; font-family: inherit; font-weight: 800; font-size: 13px; }
  .btn-flip { background: #42A5FF; color: #fff; }
  .btn-audio { background: #6DDDD0; color: #0f172a; }
  .scene { width: 100%; max-width: 780px; perspective: 1400px; cursor: pointer; }
  .card-inner { display: grid; grid-template-columns: 100%; width: 100%; min-height: 380px; transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1); transform-style: preserve-3d; }
  .card-inner.flipped { transform: rotateY(180deg); }
  .card-face { grid-area: 1 / 1 / 2 / 2; width: 100%; min-height: 380px; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 24px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6); word-break: break-word; }
  .face-front { background: ${escapeHtml(cs.bgColor || '#1e1b4b')}; color: ${escapeHtml(cs.textColor || '#ffffff')}; border: 3px solid #42A5FF; }
  .face-back { background: ${escapeHtml(cs.bgColor || '#1e1b4b')}; color: ${escapeHtml(cs.textColor || '#ffffff')}; border: 3px solid #6DDDD0; transform: rotateY(180deg); }
  .back-item { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 12px 16px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
</style>
<\/head>
<\x62ody>
  <div class="deck-bar">
    <div>
      <div style="font-weight:800;font-size:14px;color:#6DDDD0;">🃏 IUWE • SLIDE FLASHCARD 3D</div>
      <div style="font-size:11px;color:#cbd5e1;">ID: ${escapeHtml(rec.archiveId)} • Criador: ${escapeHtml(creatorHandle)}</div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button type="button" class="btn btn-flip" onclick="flipCard()">🔄 Virar Lado A ⇄ Lado B</button>
      <button type="button" class="btn btn-audio" onclick="playMasterAudio()">🎧 Ouvir Tudo</button>
    </div>
  </div>
  <div class="scene" onclick="flipCard()">
    <div id="slide-card" class="card-inner">
      <div class="card-face face-front">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="background:#42A5FF;padding:5px 12px;border-radius:8px;font-weight:800;font-size:12px;">LADO A • ${escapeHtml(front.langLabel || 'Principal')}</span><span style="font-size:12px;color:#6DDDD0;font-weight:700;">👆 Clique p/ virar</span></div>
        <div style="margin:auto 0;text-align:center;"><div style="font-size:clamp(20px,3.2vw,30px);font-weight:800;">"${escapeHtml(front.text || '')}"</div>${front.hint ? `<div style="font-size:14px;color:#e9d5ff;margin-top:8px;font-style:italic;">${escapeHtml(front.hint)}</div>` : ''}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:#cbd5e1;">Flashcard 3D IUWE</span><button type="button" class="btn btn-audio" onclick="event.stopPropagation(); playSideAudio('front', -1);">🔊 Ouvir Lado A</button></div>
      </div>
      <div class="card-face face-back">
        <div style="display:flex;justify-content:space-between;align-items:center;"><span style="background:#6DDDD0;color:#0f172a;padding:5px 12px;border-radius:8px;font-weight:800;font-size:12px;">LADO B • TRADUÇÕES</span><span style="font-size:12px;color:#e9d5ff;font-weight:700;">↩️ Voltar ao Lado A</span></div>
        <div style="margin:auto 0;padding:12px 0;">
          ${backs.map((b, idx) => `<div class="back-item"><div style="flex:1;"><div style="font-size:11px;font-weight:800;color:#6DDDD0;">${escapeHtml(b.langLabel || b.langCode || 'Tradução')}</div><div style="font-size:18px;font-weight:800;">"${escapeHtml(b.text || '')}"</div></div><button type="button" class="btn btn-audio" onclick="event.stopPropagation(); playSideAudio('back', ${idx});">🔊 Ouvir</button></div>`).join('')}
        </div>
        <div style="font-size:11px;color:#cbd5e1;text-align:right;">Clique para alternar os lados</div>
      </div>
    </div>
  </div>
  <script>
    const FRONT_AUDIO = ${JSON.stringify(front.audioBase64 || '').replace(/<\//g, '<\\/')};
    const BACK_AUDIOS = ${JSON.stringify(backs.map(b => b.audioBase64 || '')).replace(/<\//g, '<\\/')};
    const MASTER_AUDIO = ${JSON.stringify(masterAudioB64).replace(/<\//g, '<\\/')};
    let currentAudio = null;
    function flipCard() { document.getElementById('slide-card').classList.toggle('flipped'); }
    function playDataUrl(u) { if (!u) return; if (currentAudio) { try { currentAudio.pause(); } catch(e){} } currentAudio = new Audio(u); currentAudio.play().catch(()=>{}); }
    function playSideAudio(side, idx) {
      if (side === 'front' && FRONT_AUDIO) { playDataUrl(FRONT_AUDIO); return; }
      if (side === 'back' && idx >= 0 && BACK_AUDIOS[idx]) { playDataUrl(BACK_AUDIOS[idx]); return; }
      if (MASTER_AUDIO) playDataUrl(MASTER_AUDIO);
    }
    function playMasterAudio() { if (MASTER_AUDIO) playDataUrl(MASTER_AUDIO); }
  <\/script>
<\/body>
<\/html>`;
        }

        function buildCompiledBookletStudyHtml(bookTitle, archiveId, creatorHandle, slides, cardStyle) {
            const cs = cardStyle || { bgColor: '#1e1b4b', textColor: '#ffffff' };
            const safeSlides = Array.isArray(slides) && slides.length > 0 ? slides : [];
            const safeSlidesJson = JSON.stringify(safeSlides).replace(/<\//g, "<\\/");
            const safeCreatorJson = JSON.stringify(creatorHandle || "@estudante_iuwe");
            return `<!DOCTYPE html>
<\x68tml lang="pt-BR">
<\x68ead>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(bookTitle)} • Livreto Ilustrado IUWE (${escapeHtml(archiveId)})</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 20px; min-height: 100vh; font-family: 'Montserrat', sans-serif; background: radial-gradient(circle at top, #1e1b4b, #0f172a 75%); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .top-bar { width: 100%; max-width: 860px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: 16px; padding: 12px 18px; }
  .btn { cursor: pointer; border: none; border-radius: 12px; padding: 9px 15px; font-family: inherit; font-weight: 800; font-size: 12.5px; transition: transform 0.15s; }
  .btn:active { transform: scale(0.96); }
  .btn-nav { background: #42A5FF; color: #fff; }
  .btn-show { background: #f59e0b; color: #0f172a; }
  .btn-stop { background: #e11d48; color: #fff; }
  .btn-audio { background: #6DDDD0; color: #0f172a; }
  .slide-card { width: 100%; max-width: 860px; background: ${escapeHtml(cs.bgColor || '#1e1b4b')}; color: ${escapeHtml(cs.textColor || '#ffffff')}; border: 3px solid #42A5FF; border-radius: 24px; padding: 22px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6); word-break: break-word; }
  .card-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.16); font-size: 12px; }
  .slide-img-wrap { width: 100%; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.22); background: #020617; margin: 14px 0; }
  .slide-img { width: 100%; max-height: 380px; object-fit: cover; display: block; }
  .lang-box { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.22); border-radius: 16px; padding: 13px 16px; margin-bottom: 10px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
  .lang-label { font-size: 11.5px; font-weight: 800; color: #6DDDD0; margin-bottom: 5px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .lang-text { font-size: clamp(15px, 2.2vw, 20px); font-weight: 800; line-height: 1.42; color: #fff; }
  .hidden-mask { cursor: pointer; padding: 8px 12px; border-radius: 10px; background: rgba(15,23,42,0.75); border: 1px dashed rgba(255,255,255,0.35); color: #fde047; font-size: 13px; font-weight: 700; font-style: italic; }
  .card-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.16); font-size: 11.5px; color: #e9d5ff; }
</style>
<\/head>
<\x62ody>
  <div class="top-bar">
    <div>
      <div style="font-weight:800;font-size:15px;color:#fbbf24;">📖 ${escapeHtml(bookTitle)}</div>
      <div id="voice-indicator" style="font-size:11px;color:#cbd5e1;">ID: ${escapeHtml(archiveId)} • Criador: ${escapeHtml(creatorHandle)}</div>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <label style="display:flex;align-items:center;gap:5px;font-size:11px;font-weight:700;background:rgba(255,255,255,0.12);padding:6px 10px;border-radius:10px;cursor:pointer;">
        <input id="chk-auto-dialogue" type="checkbox" checked>
        <span>Tocar diálogo ao passar slide</span>
      </label>
      <button type="button" class="btn btn-nav" onclick="changeSlide(-1, true)">◀ Anterior</button>
      <span id="page-indicator" style="font-weight:800;font-size:13px;padding:0 6px;">Slide 1 / ${safeSlides.length}</span>
      <button type="button" class="btn btn-nav" onclick="changeSlide(1, true)">Próximo ▶</button>
      <button id="btn-slideshow" type="button" class="btn btn-show" onclick="toggleSlideshow()">▶️ Apresentação de Slides</button>
    </div>
  </div>
  <div class="slide-card">
    <div class="card-header">
      <span style="font-weight:800;color:#6DDDD0;">📖 ${escapeHtml(bookTitle)}</span>
      <div style="display:flex;gap:8px;align-items:center;">
        <span id="badge-voice" style="background:rgba(255,255,255,0.15);padding:3px 9px;border-radius:6px;color:#e9d5ff;font-weight:700;">🎙️ Zephyr (1.0x)</span>
        <span id="badge-page" style="background:#f59e0b;color:#0f172a;padding:3px 9px;border-radius:6px;font-weight:800;">PÁGINA 1</span>
      </div>
    </div>
    <div class="slide-img-wrap"><img id="s-img" class="slide-img" src="" alt="Ilustração do Slide"></div>
    <div id="langs-wrapper"></div>
    <div class="card-footer">
      <span>Passe o slide nas setas acima (ou teclado ◀ ▶) para ouvir o diálogo ou inicie a Apresentação:</span>
      <button id="btn-slideshow-bottom" type="button" class="btn btn-show" onclick="toggleSlideshow()">▶️ Apresentação de Slides</button>
    </div>
  </div>
  <script>
    const SLIDES = ${safeSlidesJson};
    const CREATOR_HANDLE = ${safeCreatorJson};
    let idx = 0;
    let currentAudio = null;
    let slideshowRunning = false;
    const manualHidden = {};
    const revealed = {};

    function esc(str) {
      return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function playDataUrl(url) {
      if (!url) return Promise.resolve();
      if (currentAudio) { try { currentAudio.pause(); } catch(e) {} }
      return new Promise(resolve => {
        const a = new Audio(url);
        currentAudio = a;
        a.onended = () => resolve();
        a.onerror = () => resolve();
        a.play().catch(() => resolve());
      });
    }

    function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

    function isStripMasked(key, isHiddenByCreator) {
      if (key in manualHidden) return Boolean(manualHidden[key]);
      return Boolean(isHiddenByCreator && !revealed[key]);
    }

    function toggleReveal(k, isHiddenByCreator) {
      const cur = isStripMasked(k, isHiddenByCreator);
      if (cur) { revealed[k] = true; manualHidden[k] = false; }
      else { revealed[k] = false; manualHidden[k] = true; }
      render();
    }

    function buildStrip(label, text, isHidden, key, tier) {
      const showMask = isStripMasked(key, isHidden);
      return '<div class="lang-box">' +
        '<div style="flex:1;">' +
          '<div class="lang-label"><span>' + esc(label) + '</span>' +
            '<button type="button" onclick="toggleReveal(\\'' + key + '\\', ' + Boolean(isHidden) + ')" style="background:rgba(255,255,255,0.18);border:none;color:#fde047;border-radius:6px;padding:2px 8px;cursor:pointer;font-size:11px;font-weight:700;">' + (showMask ? '👁️ Revelar texto' : '🙈 Ocultar texto') + '</button>' +
          '</div>' +
          (showMask
            ? '<div class="hidden-mask" onclick="toggleReveal(\\'' + key + '\\', ' + Boolean(isHidden) + ')">🔒 ${uiT('hiddenTextMaskMsg')}</div>'
            : '<div class="lang-text">"' + esc(text) + '"</div>') +
        '</div>' +
        '<button type="button" class="btn btn-audio" onclick="playSlideSide(\\'' + tier + '\\')">🔊 Ouvir</button>' +
      '</div>';
    }

    function updateSlideshowBtns() {
      const b1 = document.getElementById('btn-slideshow');
      const b2 = document.getElementById('btn-slideshow-bottom');
      [b1, b2].forEach(b => {
        if (!b) return;
        b.textContent = slideshowRunning ? '⏹️ Parar Apresentação' : '▶️ Apresentação de Slides';
        b.className = 'btn ' + (slideshowRunning ? 'btn-stop' : 'btn-show');
      });
    }

    function render() {
      const s = SLIDES[idx] || {};
      document.getElementById('page-indicator').textContent = 'Slide ' + (idx + 1) + ' / ' + SLIDES.length;
      document.getElementById('voice-indicator').textContent = '🎙️ Voz: ' + (s.voice || 'Zephyr') + ' (' + (s.speed || '1.0') + 'x) • Criador: ' + CREATOR_HANDLE;
      document.getElementById('badge-voice').textContent = '🎙️ ' + (s.voice || 'Zephyr') + ' (' + (s.speed || '1.0') + 'x)';
      document.getElementById('badge-page').textContent = 'PÁGINA ' + (idx + 1) + ' DE ' + SLIDES.length;
      const imgEl = document.getElementById('s-img');
      if (imgEl) {
        imgEl.src = s.imageDataUrl || '';
        imgEl.style.display = s.imageDataUrl ? 'block' : 'none';
      }
      let html = '';
      html += buildStrip('4. ' + (s.primaryLangLabel || s.primaryLang || 'Principal'), s.primaryText, Boolean(s.hidePrimaryText), idx + '_p', 'primary');
      if (s.enableSecondary !== false && s.secondaryText) {
        html += buildStrip('5. ' + (s.secondaryLangLabel || s.secondaryLang || '2º Idioma'), s.secondaryText, Boolean(s.hideSecondaryText), idx + '_s', 'secondary');
      }
      if (s.enableTertiary && s.tertiaryText) {
        html += buildStrip('6. ' + (s.tertiaryLangLabel || s.tertiaryLang || '3º Idioma'), s.tertiaryText, Boolean(s.hideTertiaryText), idx + '_t', 'tertiary');
      }
      document.getElementById('langs-wrapper').innerHTML = html;
      updateSlideshowBtns();
    }

    async function playCurrentSlideDialogue() {
      const s = SLIDES[idx] || {};
      const list = [];
      if (s.primaryAudioBase64) list.push(s.primaryAudioBase64);
      if (s.enableSecondary !== false && s.secondaryAudioBase64) list.push(s.secondaryAudioBase64);
      if (s.enableTertiary && s.tertiaryAudioBase64) list.push(s.tertiaryAudioBase64);
      for (let i = 0; i < list.length; i++) {
        await playDataUrl(list[i]);
        if (i < list.length - 1) await wait(450);
      }
    }

    function changeSlide(delta, triggerAuto) {
      if (currentAudio) { try { currentAudio.pause(); } catch(e) {} }
      idx = (idx + delta + SLIDES.length) % SLIDES.length;
      render();
      const autoChk = document.getElementById('chk-auto-dialogue');
      if (triggerAuto && (!autoChk || autoChk.checked)) playCurrentSlideDialogue();
    }

    function playSlideSide(which) {
      const s = SLIDES[idx] || {};
      if (which === 'primary' && s.primaryAudioBase64) { playDataUrl(s.primaryAudioBase64); return; }
      if (which === 'secondary' && s.secondaryAudioBase64) { playDataUrl(s.secondaryAudioBase64); return; }
      if (which === 'tertiary' && s.tertiaryAudioBase64) { playDataUrl(s.tertiaryAudioBase64); return; }
    }

    async function toggleSlideshow() {
      if (slideshowRunning) {
        slideshowRunning = false;
        if (currentAudio) { try { currentAudio.pause(); } catch(e) {} }
        updateSlideshowBtns();
        return;
      }
      slideshowRunning = true;
      updateSlideshowBtns();
      for (let i = 0; i < SLIDES.length; i++) {
        if (!slideshowRunning) break;
        idx = i;
        render();
        await playCurrentSlideDialogue();
        if (!slideshowRunning) break;
        await wait(1100);
      }
      slideshowRunning = false;
      updateSlideshowBtns();
    }

    document.addEventListener('keydown', function(e) {
      if (e.code === 'ArrowRight') { e.preventDefault(); changeSlide(1, true); }
      if (e.code === 'ArrowLeft') { e.preventDefault(); changeSlide(-1, true); }
    });

    render();
  <\/script>
<\/body>
<\/html>`;
        }

        function buildCompiledVocabStudyHtml(themeTitle, archiveId, creatorHandle, items, cardStyle) {
            const cs = cardStyle || { bgColor: '#134e4a', textColor: '#ffffff' };
            const safeItems = Array.isArray(items) && items.length > 0 ? items : [];
            const safeItemsJson = JSON.stringify(safeItems).replace(/<\//g, "<\\/");
            const safeCreatorJson = JSON.stringify(creatorHandle || "@estudante_iuwe");
            return `<!DOCTYPE html>
<\x68tml lang="pt-BR">
<\x68ead>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(themeTitle)} • Caderno Interativo IUWE (${escapeHtml(archiveId)})</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 20px; min-height: 100vh; font-family: 'Montserrat', sans-serif; background: radial-gradient(circle at top, #064e3b, #0f172a 75%); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .top-bar { width: 100%; max-width: 840px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: 16px; padding: 12px 18px; }
  .btn { cursor: pointer; border: none; border-radius: 12px; padding: 10px 16px; font-family: inherit; font-weight: 800; font-size: 13px; }
  .btn-nav { background: #42A5FF; color: #fff; }
  .btn-show { background: #34d399; color: #0f172a; }
  .btn-audio { background: #6DDDD0; color: #0f172a; }
  .vocab-card { width: 100%; max-width: 840px; background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #064e3b 100%); border: 3px solid #6DDDD0; border-radius: 24px; padding: 24px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6); word-break: break-word; }
  .lang-box { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.22); border-radius: 16px; padding: 14px 18px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 10px; }
  .lang-label { font-size: 12px; font-weight: 800; color: #6DDDD0; margin-bottom: 4px; }
  .term-title { font-size: clamp(16px, 2.3vw, 20px); font-weight: 800; color: #fde047; margin-bottom: 4px; }
  .sent-text { font-size: clamp(15px, 2.1vw, 19px); font-weight: 700; line-height: 1.4; color: #fff; }
  .hidden-mask { cursor: pointer; padding: 8px 12px; border-radius: 10px; background: rgba(15,23,42,0.75); border: 1px dashed rgba(255,255,255,0.35); color: #fde047; font-size: 13px; font-weight: 700; font-style: italic; }
</style>
<\/head>
<\x62ody>
  <div class="top-bar">
    <div>
      <div style="font-weight:800;font-size:15px;color:#34d399;">📚 ${escapeHtml(themeTitle)}</div>
      <div id="voice-indicator" style="font-size:11px;color:#cbd5e1;">ID: ${escapeHtml(archiveId)} • Criador: ${escapeHtml(creatorHandle)}</div>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <button type="button" class="btn btn-nav" onclick="changeItem(-1)">◀ Anterior</button>
      <span id="page-indicator" style="font-weight:800;font-size:13px;padding:0 8px;">Termo 1 / ${safeItems.length}</span>
      <button type="button" class="btn btn-nav" onclick="changeItem(1)">Próximo ▶</button>
    </div>
  </div>
  <div class="vocab-card">
    <div id="v-note" style="font-size:13px;color:#fde047;background:rgba(255,255,255,0.1);padding:10px 14px;border-radius:12px;margin-bottom:14px;font-style:italic;"></div>
    <div id="langs-wrapper"></div>
  </div>
  <script>
    const ITEMS = ${safeItemsJson};
    const CREATOR_HANDLE = ${safeCreatorJson};
    let idx = 0;
    let currentAudio = null;
    const revealed = {};
    const dictOpen = {};
    const dictVal = {};
    const dictFb = {};
    const dictMeta = {};

    function playDataUrl(url) {
      if (!url) return Promise.resolve();
      if (currentAudio) { try { currentAudio.pause(); } catch(e) {} }
      return new Promise(resolve => {
        const a = new Audio(url);
        currentAudio = a;
        a.onended = () => resolve();
        a.onerror = () => resolve();
        a.play().catch(() => resolve());
      });
    }

    function toggleReveal(k) {
      revealed[k] = !revealed[k];
      if (revealed[k] && dictOpen[k] && (dictVal[k] || '').trim()) { checkDictation(k); return; }
      render();
    }

    function toggleDict(k) {
      dictOpen[k] = !dictOpen[k];
      if (dictOpen[k]) revealed[k] = false;
      render();
    }

    function updateDictInput(k, v) { dictVal[k] = v; }

    function checkDictation(k) {
      revealed[k] = true;
      const attempt = (dictVal[k] || '').trim();
      const m = dictMeta[k] || { sent: '', term: '' };
      const target = [m.term, m.sent].filter(Boolean).join('. ');
      const clean = s => String(s || '').toLowerCase().replace(/[.,!?;:"“”()’'\\-]/g, ' ').replace(/\\s+/g, ' ').trim();
      const uW = clean(attempt).split(' ').filter(Boolean);
      const rW = clean(target).split(' ').filter(Boolean);
      const sW = clean(m.sent || '').split(' ').filter(Boolean);
      let hits = 0; const missed = [];
      rW.forEach(w => { if (uW.includes(w)) hits++; else missed.push(w); });
      let sHits = 0; sW.forEach(w => { if (uW.includes(w)) sHits++; });
      const scoreFull = rW.length ? Math.min(100, Math.round((hits / rW.length) * 100)) : 100;
      const scoreSent = sW.length ? Math.min(100, Math.round((sHits / sW.length) * 100)) : 0;
      const score = Math.max(scoreFull, scoreSent);
      const praise = score >= 95 ? '🎉 Sensacional! Você captou praticamente 100% do áudio!' : (score >= 65 ? '👏 Muito bem! Você compreendeu a maior parte do áudio!' : '💪 Ótimo esforço! Continue praticando sua escuta ativa!');
      const tip = missed.length ? 'Observe especialmente os trechos: "' + missed.slice(0, 4).join('", "') + '".' : 'Pronúncia e escrita alinhadas!';
      dictFb[k] = { praise, score, attempt, term: m.term, sent: m.sent, tip };
      render();
    }

    function buildStrip(label, term, sent, isHidden, key, tier, remDict) {
      dictMeta[key] = { term: term || '', sent: sent || '' };
      const isOpen = !remDict && Boolean(dictOpen[key]);
      const showMask = (isHidden || isOpen) && !revealed[key];
      const fb = dictFb[key];
      return '<div class="lang-box">' +
        '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:14px;">' +
          '<div style="flex:1;">' +
            '<div class="lang-label">' + label +
              ' <button type="button" onclick="toggleReveal(\\'' + key + '\\')" style="margin-left:8px;background:rgba(255,255,255,0.18);border:none;color:#fde047;border-radius:6px;padding:2px 8px;cursor:pointer;font-size:11px;font-weight:700;">' + (showMask ? '👁️ Exibir texto' : '🙈 Ocultar texto') + '</button>' +
              (!remDict ? ' <button type="button" onclick="toggleDict(\\'' + key + '\\')" style="margin-left:6px;background:#34d399;border:none;color:#0f172a;border-radius:6px;padding:2px 8px;cursor:pointer;font-size:11px;font-weight:800;">' + (isOpen ? 'Fechar Ditado' : '✍️ Praticar Ditado') + '</button>' : '') +
            '</div>' +
            (showMask
              ? '<div class="hidden-mask" onclick="toggleReveal(\\'' + key + '\\')">🔒 ${uiT('hiddenTextMaskMsg')}</div>'
              : '<div class="term-title">📌 ' + (term || '') + '</div><div class="sent-text">"' + (sent || '') + '"</div>') +
          '</div>' +
          '<button type="button" class="btn btn-audio" onclick="playItemSide(\\'' + tier + '\\')">🔊 Ouvir</button>' +
        '</div>' +
        (isOpen ? (
          '<div style="margin-top:8px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.18);">' +
            '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
              '<input type="text" value="' + String(dictVal[key] || '').replace(/"/g, '&quot;') + '" oninput="updateDictInput(\\'' + key + '\\', this.value)" placeholder="🎧 Ouça o áudio e escreva o que você entendeu..." style="flex:1;min-width:200px;padding:8px 12px;border-radius:10px;border:1px solid #34d399;background:rgba(15,23,42,0.85);color:#fff;font-family:inherit;font-size:13px;font-weight:700;">' +
              '<button type="button" class="btn btn-show" onclick="checkDictation(\\'' + key + '\\')">✨ Exibir & Corrigir</button>' +
            '</div>' +
            (fb ? (
              '<div style="margin-top:8px;padding:10px 12px;border-radius:12px;background:rgba(6,78,59,0.9);border:1px solid #34d399;font-size:12px;line-height:1.45;">' +
                '<div style="font-weight:800;color:#6ee7b7;margin-bottom:4px;">' + fb.praise + ' (🎯 Precisão: ' + fb.score + '%)</div>' +
                '<div style="color:#fde047;">✍️ Você escreveu: "' + fb.attempt + '"</div>' +
                '<div style="color:#a7f3d0;">✅ Áudio completo: 📌 <b>' + (fb.term || '') + '</b> — "' + (fb.sent || '') + '"</div>' +
                '<div style="color:#e2e8f0;margin-top:4px;">💡 <b>Dica:</b> ' + fb.tip + '</div>' +
              '</div>'
            ) : '') +
          '</div>'
        ) : '') +
      '</div>';
    }

    function render() {
      const it = ITEMS[idx] || {};
      document.getElementById('page-indicator').textContent = 'Termo ' + (idx + 1) + ' / ' + ITEMS.length;
      document.getElementById('voice-indicator').textContent = '🎙️ Voz: ' + (it.voice || 'Zephyr') + ' (' + (it.speed || '1.0') + 'x) • Criador: ' + CREATOR_HANDLE;
      document.getElementById('v-note').textContent = '💡 Dica: ' + (it.usageNote || '');
      let html = '';
      html += buildStrip('4. ' + (it.primaryLangLabel || it.primaryLang || 'Principal'), it.primaryTerm, it.primarySentence, (it.hidePrimaryText !== false), idx + '_p', 'primary', Boolean(it.removePrimaryDictation));
      if (it.enableSecondary !== false && (it.secondaryTerm || it.secondarySentence)) {
        html += buildStrip('5. ' + (it.secondaryLangLabel || it.secondaryLang || '2º Idioma'), it.secondaryTerm, it.secondarySentence, (it.hideSecondaryText !== false), idx + '_s', 'secondary', Boolean(it.removeSecondaryDictation));
      }
      if (it.enableTertiary && (it.tertiaryTerm || it.tertiarySentence)) {
        html += buildStrip('6. ' + (it.tertiaryLangLabel || it.tertiaryLang || '3º Idioma'), it.tertiaryTerm, it.tertiarySentence, (it.hideTertiaryText !== false), idx + '_t', 'tertiary', Boolean(it.removeTertiaryDictation));
      }
      document.getElementById('langs-wrapper').innerHTML = html;
    }

    function changeItem(delta) {
      if (currentAudio) { try { currentAudio.pause(); } catch(e) {} }
      idx = (idx + delta + ITEMS.length) % ITEMS.length;
      render();
    }

    function playItemSide(which) {
      const it = ITEMS[idx] || {};
      if (which === 'primary' && it.primaryAudioBase64) { playDataUrl(it.primaryAudioBase64); return; }
      if (which === 'secondary' && it.secondaryAudioBase64) { playDataUrl(it.secondaryAudioBase64); return; }
      if (which === 'tertiary' && it.tertiaryAudioBase64) { playDataUrl(it.tertiaryAudioBase64); return; }
    }

    render();
  <\/script>
<\/body>
<\/html>`;
        }


        // ============================================================================
        // 5. CONSTRUTORES DAS 4 OPÇÕES DE CONTEÚDO (AUDIOCAST, FLASHCARD, LIVRETO, VOCAB)
        // ============================================================================
        let currentDraftInitIso = new Date().toISOString();
        let activePreviewAudio = null;
        let activeFeedSlideshowId = null;

        function stopActiveAudioAndSlideshow() {
            activeFeedSlideshowId = null;
            if (activePreviewAudio) {
                try { activePreviewAudio.pause(); } catch (e) {}
                activePreviewAudio = null;
            }
        }

        function playAudioUrl(url) {
            if (!url) return Promise.resolve();
            if (activePreviewAudio) {
                try { activePreviewAudio.pause(); } catch (e) {}
            }
            return new Promise(resolve => {
                const audio = new Audio(url);
                activePreviewAudio = audio;
                audio.onended = () => resolve();
                audio.onerror = () => resolve();
                audio.play().catch(() => resolve());
            });
        }

        function waitMs(ms) { return new Promise(r => setTimeout(r, ms)); }

        function parseCustomPostTags(defaultModuleTag, extraLangTags = []) {
            const raw = (document.getElementById('creator-custom-tags')?.value || '').trim();
            const parts = raw.split(/[\s,;]+/).map(t => t.trim()).filter(Boolean).map(t => t.startsWith('#') ? t : ('#' + t));
            const set = new Set([defaultModuleTag, ...extraLangTags, ...parts]);
            return Array.from(set).slice(0, 10);
        }

        // --- 5.1. OPÇÃO 1: AUDIOCAST ---
        let cycleBlocks = [];

        // --- 5.1. OPÇÃO 1: AUDIOCAST (COMPLETO + MODO FREE SEM CHAVE API) ---
        window.fillQuickPhrase = function(phrase, lang) {
            const txt = document.getElementById('ac-text-input');
            const sel = document.getElementById('ac-lang-select');
            if (txt) txt.value = phrase;
            if (sel && lang) sel.value = lang;
        };

        window.addAudioBlock = async function() {
            const txtEl = document.getElementById('ac-text-input');
            const langEl = document.getElementById('ac-lang-select');
            const voiceEl = document.getElementById('ac-voice-select');
            const speedEl = document.getElementById('ac-speed-select');
            const btn = document.getElementById('btn-add-audio-block');
            const icon = document.getElementById('add-audio-icon');
            const label = document.getElementById('add-audio-label');

            const rawText = txtEl ? txtEl.value.trim() : '';
            if (!rawText) {
                showToast('Digite um texto antes de clicar em + Áudio!', 'error');
                return;
            }

            const apiKey = await secureKeyVault.getApiKey();
            const langCode = langEl ? langEl.value : 'en-CA';
            const langLabel = LANG_LABELS[langCode] || langCode;
            const targetLangName = LANG_ENGLISH_NAMES[langCode] || 'English';
            const voice = voiceEl ? voiceEl.value : 'Zephyr';
            const speed = speedEl ? parseFloat(speedEl.value) : 1.0;

            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Traduzindo e Gerando Voz...';

            try {
                const spokenText = await translateTextWithGemini(rawText, langCode, targetLangName, apiKey);
                const { pcm16, sampleRate } = await synthesizeCleanPcmWithGemini(spokenText, voice, apiKey);
                const speedAdjustedPcm = await applyCleanPlaybackSpeedToPcm(pcm16, sampleRate, speed);
                const wavBlob = pcmToWavBlob(speedAdjustedPcm, sampleRate);
                const wavUrl = URL.createObjectURL(wavBlob);
                const durationSec = Number((speedAdjustedPcm.length / sampleRate).toFixed(2));

                cycleBlocks.push({
                    id: 'blk_' + Date.now() + '_' + Math.random().toString(36).slice(2, 5),
                    kind: 'audio',
                    sourceText: rawText,
                    spokenText,
                    langCode,
                    langLabel,
                    voice,
                    speed: speed.toFixed(1),
                    sampleRate,
                    pcm16: speedAdjustedPcm,
                    wavBlob,
                    wavUrl,
                    durationSec
                });
                renderCycleBlocks();
                playAudioUrl(wavUrl);
                showToast(`Áudio adicionado (${langLabel} • ${durationSec}s)!`, 'success');
            } catch (err) {
                showToast(err.message || 'Erro ao sintetizar áudio.', 'error');
            } finally {
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-plus';
                if (label) label.textContent = 'Incluir Áudio na Trilha (+ Áudio)';
            }
        };

        window.addPauseBlock = function() {
            const sel = document.getElementById('ac-pause-select');
            const dur = sel ? parseFloat(sel.value) : 1.5;
            cycleBlocks.push({
                id: 'blk_' + Date.now() + '_' + Math.random().toString(36).slice(2, 5),
                kind: 'pause',
                durationSec: dur
            });
            renderCycleBlocks();
            showToast(`Pausa de ${dur.toFixed(1)}s adicionada ao ciclo!`, 'info');
        };

        window.moveCycleBlock = function(index, delta) {
            const target = index + delta;
            if (target < 0 || target >= cycleBlocks.length) return;
            const tmp = cycleBlocks[index];
            cycleBlocks[index] = cycleBlocks[target];
            cycleBlocks[target] = tmp;
            renderCycleBlocks();
        };

        window.removeCycleBlock = function(blockId) {
            cycleBlocks = cycleBlocks.filter(b => b.id !== blockId);
            renderCycleBlocks();
        };

        window.clearCycleBlocks = function() {
            cycleBlocks = [];
            const box = document.getElementById('internal-preview-box');
            if (box) box.classList.add('hidden');
            renderCycleBlocks();
        };

        window.playSingleCycleBlock = function(blockId) {
            const blk = cycleBlocks.find(b => b.id === blockId);
            if (blk && blk.wavUrl) playAudioUrl(blk.wavUrl);
        };

        function renderCycleBlocks() {
            const listEl = document.getElementById('cycle-blocks-list');
            const countEl = document.getElementById('cycle-block-count');
            const durEl = document.getElementById('cycle-total-duration');
            const totalDur = cycleBlocks.reduce((acc, b) => acc + (b.durationSec || 0), 0);
            if (countEl) countEl.textContent = String(cycleBlocks.length);
            if (durEl) durEl.textContent = `${totalDur.toFixed(1)}s`;
            if (!listEl) return;

            if (cycleBlocks.length === 0) {
                listEl.innerHTML = `
                    <div class="text-center text-xs text-purple-400 py-4 bg-iuwe-purple/25 rounded-xl border border-dashed border-iuwe-purpleBorder">
                        ${uiT('emptyCycleMsg')}
                    </div>
                `;
                return;
            }

            listEl.innerHTML = cycleBlocks.map((b, idx) => {
                if (b.kind === 'pause') {
                    return `
                        <div class="bg-purple-50 border border-purple-200 rounded-xl px-3 py-2 flex items-center justify-between text-xs">
                            <span class="font-extrabold text-purple-500 flex items-center gap-2">
                                <span class="w-5 h-5 rounded-full bg-iuwe-blue text-white text-[10px] flex items-center justify-center">${idx + 1}</span>
                                <i class="fa-solid fa-hourglass-half text-purple-700"></i>
                                <span>${uiT('silencePauseLabel')} (${b.durationSec.toFixed(1)}s)</span>
                            </span>
                            <div class="flex items-center gap-1">
                                <button type="button" onclick="moveCycleBlock(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} class="w-6 h-6 rounded bg-white border border-purple-300 text-iuwe-blue disabled:opacity-30"><i class="fa-solid fa-chevron-up text-[9px]"></i></button>
                                <button type="button" onclick="moveCycleBlock(${idx}, 1)" ${idx === cycleBlocks.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded bg-white border border-purple-300 text-iuwe-blue disabled:opacity-30"><i class="fa-solid fa-chevron-down text-[9px]"></i></button>
                                <button type="button" onclick="removeCycleBlock('${b.id}')" class="w-6 h-6 rounded bg-rose-100 text-rose-600"><i class="fa-solid fa-xmark text-xs"></i></button>
                            </div>
                        </div>
                    `;
                }
                return `
                    <div class="bg-white border border-iuwe-purpleBorder rounded-xl p-2.5 flex items-center justify-between gap-2 text-xs">
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <span class="w-5 h-5 rounded-full bg-purple-500 text-white text-[10px] font-extrabold flex items-center justify-center">${idx + 1}</span>
                                <span class="font-extrabold text-iuwe-blue text-[10.5px]">${escapeHtml(b.langLabel)} • ${escapeHtml(b.voice)} (${escapeHtml(b.speed)}x • ${b.durationSec}s)</span>
                            </div>
                            <div class="font-extrabold text-slate-800 mt-0.5">"${escapeHtml(b.spokenText)}"</div>
                            ${b.sourceText.toLowerCase() !== b.spokenText.toLowerCase() ? `<div class="text-[10px] text-purple-600">Original: "${escapeHtml(b.sourceText)}"</div>` : ''}
                        </div>
                        <div class="flex items-center gap-1 flex-shrink-0">
                            <button type="button" onclick="playSingleCycleBlock('${b.id}')" class="w-7 h-7 rounded-lg bg-iuwe-purple hover:bg-iuwe-purpleMid text-iuwe-blue flex items-center justify-center" title="Ouvir este áudio">
                                <i class="fa-solid fa-play text-[10px]"></i>
                            </button>
                            <button type="button" onclick="moveCycleBlock(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} class="w-6 h-6 rounded bg-iuwe-purple text-iuwe-blue disabled:opacity-30"><i class="fa-solid fa-chevron-up text-[9px]"></i></button>
                            <button type="button" onclick="moveCycleBlock(${idx}, 1)" ${idx === cycleBlocks.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded bg-iuwe-purple text-iuwe-blue disabled:opacity-30"><i class="fa-solid fa-chevron-down text-[9px]"></i></button>
                            <button type="button" onclick="removeCycleBlock('${b.id}')" class="w-6 h-6 rounded bg-rose-50 text-rose-600"><i class="fa-solid fa-xmark text-xs"></i></button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function stitchCycleToSingleWav() {
            const sampleRate = 24000;
            const chunks = [];
            let totalSamples = 0;
            cycleBlocks.forEach(b => {
                if (b.kind === 'pause') {
                    const sil = new Int16Array(Math.floor(b.durationSec * sampleRate));
                    chunks.push(sil);
                    totalSamples += sil.length;
                } else if (b.pcm16 && b.pcm16.length > 0) {
                    chunks.push(b.pcm16);
                    totalSamples += b.pcm16.length;
                }
            });
            if (totalSamples === 0) {
                const sil = new Int16Array(Math.floor(0.4 * sampleRate));
                chunks.push(sil);
                totalSamples = sil.length;
            }
            const mergedPcm = new Int16Array(totalSamples);
            let offset = 0;
            chunks.forEach(c => { mergedPcm.set(c, offset); offset += c.length; });
            return { wavBlob: pcmToWavBlob(mergedPcm, sampleRate), totalDurationSec: Number((totalSamples / sampleRate).toFixed(2)), sampleRate };
        }

        window.previewMergedAudiocast = function() {
            if (!cycleBlocks.some(b => b.kind === 'audio')) {
                showToast('Adicione pelo menos 1 bloco de áudio (+ Áudio) antes de ouvir a prévia!', 'error');
                return;
            }
            const { wavBlob, totalDurationSec } = stitchCycleToSingleWav();
            const url = URL.createObjectURL(wavBlob);
            const box = document.getElementById('internal-preview-box');
            const player = document.getElementById('internal-preview-audio');
            if (box) box.classList.remove('hidden');
            if (player) {
                player.src = url;
                player.play().catch(() => {});
            }
            showToast(`Reproduzindo prévia unificada (${totalDurationSec}s)!`, 'success');
        };

        // --- 5.2. OPÇÃO 2: FLASHCARD 3D (COMPLETO + PRÉVIA 3D + MODO FREE SEM CHAVE API) ---
        let draftFrontAudio = { hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0, voice: 'Zephyr', speed: '1.0' };
        let backLanguageItems = [
            { id: 'back_1', langCode: 'en-CA', text: '', phoneticOrNote: '', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 }
        ];

        window.loadQuickFlashcardPreset = function(presetKey) {
            clearDraftFrontAudio();
            const fLang = document.getElementById('fc-front-lang');
            const fText = document.getElementById('fc-front-text');
            const fHint = document.getElementById('fc-front-hint');

            if (presetKey === 'restaurante') {
                if (fLang) fLang.value = 'pt-BR';
                if (fText) fText.value = 'Você poderia trazer o cardápio e a conta, por favor?';
                if (fHint) fHint.value = 'Pedido educado em restaurantes e cafés';
                backLanguageItems = [
                    { id: 'back_' + Date.now() + '_1', langCode: 'en-CA', text: 'Could you please bring the menu and the bill?', phoneticOrNote: 'Inglês Canadense', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 },
                    { id: 'back_' + Date.now() + '_2', langCode: 'es-419', text: '¿Podría traer el menú y la cuenta, por favor?', phoneticOrNote: 'Espanhol Sul-Americano', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 },
                    { id: 'back_' + Date.now() + '_3', langCode: 'fr-CA', text: 'Pourriez-vous apporter le menu et la facture, s\'il vous plaît ?', phoneticOrNote: 'Francês Québécois (facture)', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 }
                ];
            } else if (presetKey === 'negocios') {
                if (fLang) fLang.value = 'pt-BR';
                if (fText) fText.value = 'Vamos alinhar os próximos passos do projeto nesta reunião.';
                if (fHint) fHint.value = 'Comunicação profissional e corporativa';
                backLanguageItems = [
                    { id: 'back_' + Date.now() + '_1', langCode: 'en-US', text: 'Let\'s align on the next steps of the project in this meeting.', phoneticOrNote: 'Inglês Corporativo', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 },
                    { id: 'back_' + Date.now() + '_2', langCode: 'es-MX', text: 'Vamos a alinear los próximos pasos del proyecto en esta reunión.', phoneticOrNote: 'Espanhol Profissional', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 }
                ];
            } else {
                if (fLang) fLang.value = 'pt-BR';
                if (fText) fText.value = 'Com licença, onde fica a estação de metrô mais próxima?';
                if (fHint) fHint.value = 'Pergunta essencial para transporte urbano';
                backLanguageItems = [
                    { id: 'back_' + Date.now() + '_1', langCode: 'en-CA', text: 'Excuse me, where is the nearest subway station?', phoneticOrNote: 'Pronúncia canadense cotidiana', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 },
                    { id: 'back_' + Date.now() + '_2', langCode: 'es-419', text: 'Disculpe, ¿dónde queda la estación de subte más cercana?', phoneticOrNote: 'Variante sul-americana', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 },
                    { id: 'back_' + Date.now() + '_3', langCode: 'fr-CA', text: 'Excusez-moi, où est la station de métro la plus proche ?', phoneticOrNote: 'Francês Québécois', hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0 }
                ];
            }
            renderBackLanguageItems();
            syncDraftPreviewCard();
            showToast('Modelo carregado no Flashcard 3D!', 'info');
        };

        function buildLanguageOptionsHtml(selectedCode) {
            return Object.keys(LANG_LABELS).map(code => {
                const sel = code === selectedCode ? 'selected' : '';
                return `<option value="${code}" ${sel}>${escapeHtml(typeof translateLangLabel === 'function' ? translateLangLabel(code, LANG_LABELS[code]) : LANG_LABELS[code])}</option>`;
            }).join('');
        }

        function renderBackLanguageItems() {
            const listEl = document.getElementById('fc-back-items-list');
            if (!listEl) return;

            listEl.innerHTML = backLanguageItems.map((item, idx) => {
                return `
                    <div class="bg-white border border-purple-200 rounded-xl p-2.5 space-y-2 shadow-2xs">
                        <div class="flex items-center justify-between gap-2 flex-wrap">
                            <div class="flex items-center gap-1.5">
                                <span class="w-5 h-5 rounded-full bg-iuwe-blue text-white text-[10px] font-extrabold flex items-center justify-center">${idx + 1}</span>
                                <select onchange="updateBackItemLang('${item.id}', this.value)" class="bg-iuwe-purple/50 border border-iuwe-purpleBorder rounded-lg px-2 py-1 text-xs font-extrabold text-slate-900">
                                    ${buildLanguageOptionsHtml(item.langCode)}
                                </select>
                            </div>
                            <div class="flex items-center gap-1">
                                <button type="button" onclick="translateSingleBackItem('${item.id}')" class="px-2 py-1 rounded-lg bg-iuwe-purple hover:bg-iuwe-purpleMid text-purple-500 border border-iuwe-purpleBorder font-extrabold text-[10px] flex items-center gap-1" title="Traduzir automaticamente do Lado A">
                                    <i class="fa-solid fa-language text-iuwe-blue"></i> <span>${uiT('translateShortBtn')}</span>
                                </button>
                                ${backLanguageItems.length > 1 ? `
                                <button type="button" onclick="removeBackLanguageItem('${item.id}')" class="w-6 h-6 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 flex items-center justify-center" title="Remover este idioma do verso">
                                    <i class="fa-solid fa-xmark text-xs"></i>
                                </button>
                                ` : ''}
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <textarea rows="2" oninput="updateBackItemText('${item.id}', this.value)" placeholder="${escapeHtml(uiT('backTransPlaceholder'))}" class="w-full bg-iuwe-purple/25 border border-iuwe-purpleBorder rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800 resize-y">${escapeHtml(item.text)}</textarea>
                            <input type="text" value="${escapeHtml(item.phoneticOrNote || '')}" oninput="updateBackItemNote('${item.id}', this.value)" placeholder="${escapeHtml(uiT('backNotePlaceholder'))}" class="w-full bg-iuwe-purple/25 border border-iuwe-purpleBorder rounded-lg px-2.5 py-1 text-[11px] text-slate-900">
                        </div>

                        <div class="flex items-center justify-between gap-2 flex-wrap pt-1 border-t border-purple-100 text-[10px]">
                            <span class="font-bold ${item.hasAudio ? 'text-iuwe-blue' : 'text-slate-500'}">
                                <i class="fa-solid ${item.hasAudio ? 'fa-circle-check text-purple-700' : 'fa-volume-xmark text-slate-400'} mr-1"></i>
                                ${item.hasAudio ? `${uiT('audioReadyShort')} (${item.durationSec}s)` : uiT('audioOptionalNotGen')}
                            </span>
                            <div class="flex items-center gap-1">
                                <button id="btn-gen-back-audio-${item.id}" type="button" onclick="generateSingleBackItemAudio('${item.id}')" class="px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-iuwe-blue text-white font-extrabold text-[10px] flex items-center gap-1">
                                    <i class="fa-solid fa-microphone-lines"></i> <span>${item.hasAudio ? uiT('regenAudioBtn') : uiT('genAudioBtn')}</span>
                                </button>
                                ${item.hasAudio ? `
                                <button type="button" onclick="playBackItemAudio('${item.id}')" class="px-2 py-1 rounded-lg bg-purple-100 text-purple-500 font-extrabold text-[10px] border border-sky-300">
                                    <i class="fa-solid fa-play"></i> Ouvir
                                </button>
                                <button type="button" onclick="clearBackItemAudio('${item.id}')" class="px-1.5 py-1 rounded-lg bg-rose-100 text-rose-700 font-extrabold text-[10px]">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        window.addBackLanguageItem = function() {
            const usedCodes = new Set(backLanguageItems.map(i => i.langCode));
            const candidate = Object.keys(LANG_LABELS).find(c => !usedCodes.has(c)) || 'en-US';
            backLanguageItems.push({
                id: 'back_' + Date.now() + '_' + Math.random().toString(36).slice(2, 5),
                langCode: candidate,
                text: '',
                phoneticOrNote: '',
                hasAudio: false,
                pcm16: null,
                sampleRate: 24000,
                wavBlob: null,
                wavUrl: '',
                wavDataUrl: '',
                durationSec: 0
            });
            renderBackLanguageItems();
            syncDraftPreviewCard();
        };

        window.removeBackLanguageItem = function(itemId) {
            if (backLanguageItems.length <= 1) {
                showToast('O Verso (Lado B) precisa ter pelo menos 1 idioma secundário.', 'info');
                return;
            }
            backLanguageItems = backLanguageItems.filter(i => i.id !== itemId);
            renderBackLanguageItems();
            syncDraftPreviewCard();
        };

        window.updateBackItemLang = function(itemId, newLangCode) {
            const item = backLanguageItems.find(i => i.id === itemId);
            if (!item) return;
            item.langCode = newLangCode;
            item.hasAudio = false;
            item.pcm16 = null;
            item.wavBlob = null;
            item.wavUrl = '';
            item.wavDataUrl = '';
            renderBackLanguageItems();
            syncDraftPreviewCard();
        };

        window.updateBackItemText = function(itemId, newText) {
            const item = backLanguageItems.find(i => i.id === itemId);
            if (!item) return;
            item.text = newText;
            syncDraftPreviewCard();
        };

        window.updateBackItemNote = function(itemId, newNote) {
            const item = backLanguageItems.find(i => i.id === itemId);
            if (!item) return;
            item.phoneticOrNote = newNote;
            syncDraftPreviewCard();
        };

        window.translateFrontTextToSelectedLang = async function() {
            const fTextEl = document.getElementById('fc-front-text');
            const fLangEl = document.getElementById('fc-front-lang');
            const raw = fTextEl ? fTextEl.value.trim() : '';
            if (!raw) {
                showToast('Digite um texto no Lado A primeiro!', 'error');
                return;
            }
            const langCode = fLangEl ? fLangEl.value : 'pt-BR';
            const targetName = LANG_ENGLISH_NAMES[langCode] || 'Portuguese';
            const apiKey = await secureKeyVault.getApiKey();
            try {
                const translated = await translateTextWithGemini(raw, langCode, targetName, apiKey);
                if (fTextEl) fTextEl.value = translated;
                syncDraftPreviewCard();
                showToast(`Texto do Lado A traduzido para ${LANG_LABELS[langCode]}!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
            }
        };

        window.translateSingleBackItem = async function(itemId) {
            const item = backLanguageItems.find(i => i.id === itemId);
            const fText = document.getElementById('fc-front-text')?.value.trim() || '';
            if (!item || !fText) {
                showToast('Preencha a frase principal no Lado A primeiro!', 'error');
                return;
            }
            const apiKey = await secureKeyVault.getApiKey();
            const targetName = LANG_ENGLISH_NAMES[item.langCode] || 'English';
            try {
                const translated = await translateTextWithGemini(fText, item.langCode, targetName, apiKey);
                item.text = translated;
                renderBackLanguageItems();
                syncDraftPreviewCard();
                showToast(`Traduzido para ${LANG_LABELS[item.langCode]}!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
            }
        };

        window.translateAllBackItemsFromFront = async function() {
            const fText = document.getElementById('fc-front-text')?.value.trim() || '';
            if (!fText) {
                showToast('Preencha a frase principal no Lado A primeiro!', 'error');
                return;
            }
            const btn = document.getElementById('btn-translate-all-back');
            const icon = document.getElementById('translate-all-icon');
            const label = document.getElementById('translate-all-label');
            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Traduzindo idiomas...';

            try {
                const apiKey = await secureKeyVault.getApiKey();
                for (const item of backLanguageItems) {
                    const targetName = LANG_ENGLISH_NAMES[item.langCode] || 'English';
                    item.text = await translateTextWithGemini(fText, item.langCode, targetName, apiKey);
                }
                renderBackLanguageItems();
                syncDraftPreviewCard();
                showToast('Todas as traduções do Lado B atualizadas!', 'success');
            } catch (err) {
                showToast(err.message, 'error');
            } finally {
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-wand-magic-sparkles';
                if (label) label.textContent = 'Traduzir Todos do Lado A (Grátis)';
            }
        };

        window.generateFrontSideAudio = async function() {
            const fText = document.getElementById('fc-front-text')?.value.trim() || '';
            const fLang = document.getElementById('fc-front-lang')?.value || 'pt-BR';
            const voice = document.getElementById('fc-voice-select')?.value || 'Zephyr';
            const speed = parseFloat(document.getElementById('fc-speed-select')?.value || '1.0');

            if (!fText) {
                showToast('Digite o texto do Lado A antes de gerar o áudio!', 'error');
                return;
            }
            const apiKey = await secureKeyVault.getApiKey();

            const btn = document.getElementById('btn-gen-front-audio');
            const icon = document.getElementById('front-audio-icon');
            const label = document.getElementById('front-audio-label');
            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Sintetizando Lado A...';

            try {
                const { pcm16, sampleRate } = await synthesizeCleanPcmWithGemini(fText, voice, apiKey);
                const adjustedPcm = await applyCleanPlaybackSpeedToPcm(pcm16, sampleRate, speed);
                const wavBlob = pcmToWavBlob(adjustedPcm, sampleRate);
                const wavUrl = URL.createObjectURL(wavBlob);
                const wavDataUrl = await blobToDataUrl(wavBlob);
                const durationSec = Number((adjustedPcm.length / sampleRate).toFixed(2));

                draftFrontAudio = {
                    hasAudio: true,
                    pcm16: adjustedPcm,
                    sampleRate,
                    wavBlob,
                    wavUrl,
                    wavDataUrl,
                    durationSec,
                    voice,
                    speed: speed.toFixed(1)
                };
                updateFrontAudioUi();
                syncDraftPreviewCard();
                playAudioUrl(wavUrl);
                showToast(`Áudio do Lado A gerado (${LANG_LABELS[fLang]} • ${durationSec}s)!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
            } finally {
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-microphone-lines';
                if (label) label.textContent = draftFrontAudio.hasAudio ? 'Regerar Áudio Lado A' : 'Gerar Áudio Lado A (Opcional)';
            }
        };

        function updateFrontAudioUi() {
            const statusEl = document.getElementById('fc-front-audio-status');
            const playBtn = document.getElementById('btn-play-front-audio');
            const clearBtn = document.getElementById('btn-clear-front-audio');
            const label = document.getElementById('front-audio-label');

            if (draftFrontAudio.hasAudio) {
                if (statusEl) {
                    statusEl.innerHTML = `<i class="fa-solid fa-circle-check text-purple-700"></i> <span class="text-iuwe-blue">Áudio Lado A pronto (${draftFrontAudio.durationSec}s • ${draftFrontAudio.voice})</span>`;
                }
                if (playBtn) playBtn.classList.remove('hidden');
                if (clearBtn) clearBtn.classList.remove('hidden');
                if (label) label.textContent = 'Regerar Áudio Lado A';
            } else {
                if (statusEl) {
                    statusEl.innerHTML = `<i class="fa-solid fa-volume-xmark text-slate-400"></i> <span>Sem áudio no Lado A (Opcional)</span>`;
                }
                if (playBtn) playBtn.classList.add('hidden');
                if (clearBtn) clearBtn.classList.add('hidden');
                if (label) label.textContent = 'Gerar Áudio Lado A (Opcional)';
            }
        }

        window.playDraftFrontAudio = function() {
            if (!draftFrontAudio.hasAudio || !draftFrontAudio.wavUrl) {
                showToast('Clique em "Gerar Áudio Lado A" para sintetizar a pronúncia da frente!', 'info');
                return;
            }
            playAudioUrl(draftFrontAudio.wavUrl);
        };

        window.clearDraftFrontAudio = function() {
            draftFrontAudio = { hasAudio: false, pcm16: null, sampleRate: 24000, wavBlob: null, wavUrl: '', wavDataUrl: '', durationSec: 0, voice: 'Zephyr', speed: '1.0' };
            updateFrontAudioUi();
            syncDraftPreviewCard();
        };

        window.generateSingleBackItemAudio = async function(itemId) {
            const item = backLanguageItems.find(i => i.id === itemId);
            if (!item) return;

            const apiKey = await secureKeyVault.getApiKey();
            const fText = document.getElementById('fc-front-text')?.value.trim() || '';
            const voice = document.getElementById('fc-voice-select')?.value || 'Zephyr';
            const speed = parseFloat(document.getElementById('fc-speed-select')?.value || '1.0');

            const btn = document.getElementById('btn-gen-back-audio-' + itemId);
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> <span>Gerando...</span>`;
            }

            try {
                const targetName = LANG_ENGLISH_NAMES[item.langCode] || 'English';
                if (!item.text.trim() || (item.text.trim().toLowerCase() === fText.toLowerCase() && item.langCode !== document.getElementById('fc-front-lang')?.value)) {
                    item.text = await translateTextWithGemini(fText || item.text, item.langCode, targetName, apiKey);
                }

                const { pcm16, sampleRate } = await synthesizeCleanPcmWithGemini(item.text, voice, apiKey);
                const adjustedPcm = await applyCleanPlaybackSpeedToPcm(pcm16, sampleRate, speed);
                const wavBlob = pcmToWavBlob(adjustedPcm, sampleRate);
                const wavUrl = URL.createObjectURL(wavBlob);
                const wavDataUrl = await blobToDataUrl(wavBlob);
                const durationSec = Number((adjustedPcm.length / sampleRate).toFixed(2));

                item.hasAudio = true;
                item.pcm16 = adjustedPcm;
                item.sampleRate = sampleRate;
                item.wavBlob = wavBlob;
                item.wavUrl = wavUrl;
                item.wavDataUrl = wavDataUrl;
                item.durationSec = durationSec;

                renderBackLanguageItems();
                syncDraftPreviewCard();
                playAudioUrl(wavUrl);
                showToast(`Áudio gerado (${LANG_LABELS[item.langCode]} • ${durationSec}s)!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
                renderBackLanguageItems();
            }
        };

        window.playBackItemAudio = function(itemId) {
            const item = backLanguageItems.find(i => i.id === itemId);
            if (!item || !item.hasAudio || !item.wavUrl) {
                showToast('Gere o áudio deste idioma primeiro!', 'info');
                return;
            }
            playAudioUrl(item.wavUrl);
        };

        window.clearBackItemAudio = function(itemId) {
            const item = backLanguageItems.find(i => i.id === itemId);
            if (!item) return;
            item.hasAudio = false;
            item.pcm16 = null;
            item.wavBlob = null;
            item.wavUrl = '';
            item.wavDataUrl = '';
            item.durationSec = 0;
            renderBackLanguageItems();
            syncDraftPreviewCard();
        };

        window.generateAllCardAudiosOneClick = async function() {
            const btn = document.getElementById('btn-gen-all-card-audios');
            const icon = document.getElementById('gen-all-audios-icon');
            const label = document.getElementById('gen-all-audios-label');
            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Traduzindo e Gerando Vozes...';

            iuweBatchGenerationActive = true;
            try {
                await window.translateAllBackItemsFromFront();
                await window.generateFrontSideAudio();
                for (const item of backLanguageItems) {
                    if (typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0) break;
                    await window.generateSingleBackItemAudio(item.id);
                }
                if (!(typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0)) {
                    showToast('Flashcard completo (Lado A + Lado B) traduzido e sonorizado!', 'success');
                }
            } catch (err) {
                showToast(err.message, 'error');
            } finally {
                iuweBatchGenerationActive = false;
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-wand-magic-sparkles';
                if (label) label.textContent = 'Traduzir & Gerar Áudios (Lado A + B)';
            }
        };

        window.flipDraftPreviewCard = function() {
            const inner = document.getElementById('draft-flip-card-inner');
            if (inner) inner.classList.toggle('is-flipped');
        };

        window.syncDraftPreviewCard = function() {
            const fLang = document.getElementById('fc-front-lang')?.value || 'pt-BR';
            const fText = document.getElementById('fc-front-text')?.value.trim() || '...';
            const fHint = document.getElementById('fc-front-hint')?.value.trim() || '';

            const langBadge = document.getElementById('preview-front-lang-badge');
            const textEl = document.getElementById('preview-front-text');
            const hintEl = document.getElementById('preview-front-hint');
            const audioBadge = document.getElementById('preview-front-audio-badge');
            const backList = document.getElementById('preview-back-translations-list');

            if (langBadge) langBadge.textContent = LANG_LABELS[fLang] || fLang;
            if (textEl) textEl.textContent = `"${fText}"`;
            if (hintEl) hintEl.textContent = fHint;
            if (audioBadge) {
                audioBadge.innerHTML = draftFrontAudio.hasAudio
                    ? `<i class="fa-solid fa-circle-check text-sky-300 mr-1"></i>Áudio Lado A pronto (${draftFrontAudio.durationSec}s)`
                    : `<i class="fa-solid fa-volume-xmark text-slate-400 mr-1"></i>Áudio Lado A: Opcional`;
            }

            if (backList) {
                backList.innerHTML = backLanguageItems.map(item => `
                    <div class="bg-white/10 border border-white/15 rounded-xl px-3 py-2 flex items-start justify-between gap-2.5 text-left">
                        <div class="min-w-0 flex-1 space-y-0.5">
                            <div class="text-[10px] font-extrabold text-iuwe-teal">${escapeHtml(LANG_LABELS[item.langCode] || item.langCode)}</div>
                            <div class="text-xs sm:text-sm font-extrabold text-white break-words whitespace-normal leading-snug">"${escapeHtml(item.text || '...')}"</div>
                            ${item.phoneticOrNote ? `<div class="text-[10px] text-purple-200 break-words whitespace-normal leading-snug">${escapeHtml(item.phoneticOrNote)}</div>` : ''}
                        </div>
                        ${item.hasAudio ? `
                        <button type="button" onclick="event.stopPropagation(); playBackItemAudio('${item.id}');" class="px-2.5 py-1 rounded-lg bg-iuwe-teal text-white font-extrabold text-[10px] flex-shrink-0 mt-0.5">
                            <i class="fa-solid fa-play"></i> ${item.durationSec}s
                        </button>
                        ` : `<span class="text-[9.5px] text-slate-300 font-semibold flex-shrink-0 mt-0.5">Texto</span>`}
                    </div>
                `).join('');
            }
        };

        function stitchFlashcardMasterWav() {
            const sampleRate = 24000;
            const chunks = [];
            let totalSamples = 0;
            const pauseSamples = Math.floor(0.8 * sampleRate);

            if (draftFrontAudio.hasAudio && draftFrontAudio.pcm16) {
                chunks.push(draftFrontAudio.pcm16);
                totalSamples += draftFrontAudio.pcm16.length;
            }

            backLanguageItems.forEach(item => {
                if (item.hasAudio && item.pcm16 && item.pcm16.length > 0) {
                    if (totalSamples > 0) {
                        const silence = new Int16Array(pauseSamples);
                        chunks.push(silence);
                        totalSamples += silence.length;
                    }
                    chunks.push(item.pcm16);
                    totalSamples += item.pcm16.length;
                }
            });

            const hasAnyAudio = totalSamples > 0;
            if (!hasAnyAudio) {
                const silentMarker = new Int16Array(Math.floor(0.4 * sampleRate));
                chunks.push(silentMarker);
                totalSamples = silentMarker.length;
            }

            const mergedPcm = new Int16Array(totalSamples);
            let offset = 0;
            chunks.forEach(c => {
                mergedPcm.set(c, offset);
                offset += c.length;
            });

            const wavBlob = pcmToWavBlob(mergedPcm, sampleRate);
            const totalDurationSec = hasAnyAudio ? Number((totalSamples / sampleRate).toFixed(2)) : 0;
            return { wavBlob, hasAnyAudio, totalDurationSec, sampleRate };
        }

        window.playMergedFlashcardPreview = function() {
            const { wavBlob, hasAnyAudio, totalDurationSec } = stitchFlashcardMasterWav();
            if (!hasAnyAudio) {
                showToast('Nenhum áudio foi gerado ainda. Clique em "Gerar Áudio" no Lado A ou no Lado B!', 'info');
                return;
            }
            const url = URL.createObjectURL(wavBlob);
            playAudioUrl(url);
            showToast(`Ouvindo Flashcard unificado (${totalDurationSec}s)!`, 'success');
        };

        // --- 5.3. OPÇÃO 3: LIVRETO ILUSTRADO (SLIDE BOOK COMPLETO + UPLOAD / LINK GEMINI + MODO FREE) ---
        let activeSlideIndex = 0;
        let isDraftSlideshowRunning = false;
        let bookletSlides = [];
        const revealedTextsInStage = {};
        const manualSlideHiddenOverride = {};

        function makeDefaultSlides() {
            return [
                {
                    id: 'sld_1', voice: 'Zephyr', speed: '1.0',
                    imagePrompt: 'Slide 1',
                    imageDataUrl: createContextualSceneDataUrl('Slide 1', 0),
                    primaryLang: 'pt-BR', primaryText: '', hidePrimaryText: false,
                    primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                    enableSecondary: true, secondaryLang: 'en-CA', secondaryText: '', hideSecondaryText: false,
                    secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                    enableTertiary: false, tertiaryLang: 'fr-CA', tertiaryText: '', hideTertiaryText: false,
                    tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                }
            ];
        }

        function getCurrentSlide() {
            if (bookletSlides.length === 0) bookletSlides = makeDefaultSlides();
            if (activeSlideIndex < 0 || activeSlideIndex >= bookletSlides.length) activeSlideIndex = 0;
            return bookletSlides[activeSlideIndex];
        }

        async function playSlideDialogueSequence(slideObj) {
            if (!slideObj) return;
            const urls = [];
            if (slideObj.primaryWavUrl || slideObj.primaryAudioBase64) {
                urls.push(slideObj.primaryWavUrl || slideObj.primaryAudioBase64);
            }
            if (slideObj.enableSecondary !== false && (slideObj.secondaryWavUrl || slideObj.secondaryAudioBase64)) {
                urls.push(slideObj.secondaryWavUrl || slideObj.secondaryAudioBase64);
            }
            if (slideObj.enableTertiary && (slideObj.tertiaryWavUrl || slideObj.tertiaryAudioBase64)) {
                urls.push(slideObj.tertiaryWavUrl || slideObj.tertiaryAudioBase64);
            }
            for (let i = 0; i < urls.length; i++) {
                await playAudioUrl(urls[i]);
                if (i < urls.length - 1) {
                    await waitMs(450);
                }
            }
        }

        window.loadBookletPreset = function(presetKey) {
            isDraftSlideshowRunning = false;
            updateDraftSlideshowButton();
            const titleEl = document.getElementById('bk-title-input');
            if (presetKey === 'aeroporto') {
                if (titleEl) titleEl.value = 'Embarque Internacional no Aeroporto';
                bookletSlides = [
                    {
                        id: 'sld_' + Date.now() + '_1', voice: 'Aoede', speed: '1.0',
                        imagePrompt: 'Viajante no balcão de check-in do aeroporto internacional entregando o passaporte',
                        imageDataUrl: createContextualSceneDataUrl('Viajante no balcão de check-in do aeroporto internacional entregando o passaporte', 0),
                        primaryLang: 'pt-BR', primaryText: 'Aqui está o meu passaporte. Qual é o portão de embarque do meu voo?', hidePrimaryText: false,
                        primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                        enableSecondary: true, secondaryLang: 'en-CA', secondaryText: 'Here is my passport. What is the boarding gate for my flight?', hideSecondaryText: false,
                        secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                        enableTertiary: true, tertiaryLang: 'es-419', tertiaryText: 'Aquí está mi pasaporte. ¿Cuál es la puerta de embarque de mi vuelo?', hideTertiaryText: false,
                        tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                    },
                    {
                        id: 'sld_' + Date.now() + '_2', voice: 'Orus', speed: '1.0',
                        imagePrompt: 'Agente de embarque entregando o cartão de embarque no aeroporto',
                        imageDataUrl: createContextualSceneDataUrl('Agente de embarque entregando o cartão de embarque no aeroporto', 2),
                        primaryLang: 'pt-BR', primaryText: 'Obrigado! O seu voo parte pelo portão B12 às dezoito horas. Boa viagem!', hidePrimaryText: false,
                        primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                        enableSecondary: true, secondaryLang: 'en-CA', secondaryText: 'Thank you! Your flight departs from gate B12 at 6:00 PM. Have a great trip!', hideSecondaryText: false,
                        secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                        enableTertiary: true, tertiaryLang: 'es-419', tertiaryText: '¡Gracias! Su vuelo sale por la puerta B12 a las dieciocho horas. ¡Buen viaje!', hideTertiaryText: false,
                        tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                    }
                ];
            } else {
                if (titleEl) titleEl.value = 'Chegando em Montreal e Pedindo um Café';
                bookletSlides = makeDefaultSlides();
            }
            activeSlideIndex = 0;
            renderSlideTabsAndEditor();
            showToast('Modelo de Livreto carregado!', 'info');
        };

        window.selectSlideTab = function(index) {
            if (index < 0 || index >= bookletSlides.length) return;
            activeSlideIndex = index;
            renderSlideTabsAndEditor();
            const autoPlay = document.getElementById('chk-autoplay-on-slide-change')?.checked;
            if (autoPlay) playSlideDialogueSequence(getCurrentSlide());
        };

        window.navigateDraftSlide = function(delta, triggerDialogue = true) {
            const next = (activeSlideIndex + delta + bookletSlides.length) % bookletSlides.length;
            activeSlideIndex = next;
            renderSlideTabsAndEditor();
            const autoPlay = document.getElementById('chk-autoplay-on-slide-change')?.checked;
            if (triggerDialogue && autoPlay) playSlideDialogueSequence(getCurrentSlide());
        };

        function updateDraftSlideshowButton() {
            const icon = document.getElementById('draft-slideshow-icon');
            const label = document.getElementById('draft-slideshow-label');
            const btn = document.getElementById('btn-draft-slideshow');
            if (!btn) return;
            if (isDraftSlideshowRunning) {
                btn.className = 'px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold flex items-center gap-1.5 shadow-sm';
                if (icon) icon.className = 'fa-solid fa-stop';
                if (label) label.textContent = '⏹️ Parar Apresentação';
            } else {
                btn.className = 'px-3 py-1.5 rounded-xl bg-iuwe-blue hover:bg-purple-600 text-white font-extrabold flex items-center gap-1.5 shadow-sm';
                if (icon) icon.className = 'fa-solid fa-clapperboard';
                if (label) label.textContent = '▶️ Apresentação de Slides';
            }
        }

        window.toggleDraftSlideshow = async function() {
            if (isDraftSlideshowRunning) {
                isDraftSlideshowRunning = false;
                updateDraftSlideshowButton();
                showToast('Apresentação de slides encerrada.', 'info');
                return;
            }
            isDraftSlideshowRunning = true;
            updateDraftSlideshowButton();
            showToast('Iniciando Apresentação de Slides!', 'success');

            for (let i = 0; i < bookletSlides.length; i++) {
                if (!isDraftSlideshowRunning) break;
                activeSlideIndex = i;
                renderSlideTabsAndEditor();
                const s = bookletSlides[i];
                const hasSlideAudio = s.primaryHasAudio || (s.enableSecondary !== false && s.secondaryHasAudio) || (s.enableTertiary && s.tertiaryHasAudio);
                if (hasSlideAudio) {
                    await playSlideDialogueSequence(s);
                    if (!isDraftSlideshowRunning) break;
                    await waitMs(1100);
                } else {
                    await waitMs(2500);
                }
            }
            isDraftSlideshowRunning = false;
            updateDraftSlideshowButton();
        };

        window.duplicateCurrentSlideForAnotherLang = async function() {
            const cur = getCurrentSlide();
            const candidateOrder = ['en-CA', 'es-419', 'fr-CA', 'en-US', 'es-MX', 'fr-FR', 'de-DE', 'it-IT', 'ja-JP'];
            const nextSecondaryLang = candidateOrder.find(c => c !== cur.secondaryLang && c !== cur.primaryLang) || 'en-CA';
            const cloned = {
                ...cur,
                id: 'sld_' + Date.now() + '_' + Math.random().toString(36).slice(2, 5),
                secondaryLang: nextSecondaryLang,
                secondaryHasAudio: false, secondaryPcm16: null, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0
            };
            bookletSlides.splice(activeSlideIndex + 1, 0, cloned);
            activeSlideIndex = activeSlideIndex + 1;
            renderSlideTabsAndEditor();
            try { await window.translateCurrentSlideSecondaryFromPrimary(); } catch (e) {}
        };

        window.addNewBlankSlide = function() {
            const cur = getCurrentSlide();
            const newIdx = bookletSlides.length;
            bookletSlides.push({
                id: 'sld_' + Date.now() + '_' + Math.random().toString(36).slice(2, 5),
                voice: cur.voice || 'Zephyr',
                speed: cur.speed || '1.0',
                imagePrompt: 'Cena ilustrada do slide',
                imageDataUrl: createContextualSceneDataUrl('Cena ilustrada do slide', newIdx),
                primaryLang: cur.primaryLang || 'pt-BR',
                primaryText: 'Digite a fala principal deste novo slide...',
                hidePrimaryText: false,
                primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                enableSecondary: cur.enableSecondary !== false,
                secondaryLang: cur.secondaryLang || 'en-CA',
                secondaryText: 'Enter the 2nd language translation for this slide...',
                hideSecondaryText: false,
                secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                enableTertiary: Boolean(cur.enableTertiary),
                tertiaryLang: cur.tertiaryLang || 'es-419',
                tertiaryText: 'Ingrese la traducción en el tercer idioma...',
                hideTertiaryText: false,
                tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
            });
            activeSlideIndex = bookletSlides.length - 1;
            renderSlideTabsAndEditor();
            showToast(`Slide ${activeSlideIndex + 1} criado!`, 'success');
        };

        window.removeCurrentSlide = function() {
            if (bookletSlides.length <= 1) {
                showToast('O Livreto precisa ter pelo menos 1 slide.', 'info');
                return;
            }
            bookletSlides.splice(activeSlideIndex, 1);
            if (activeSlideIndex >= bookletSlides.length) activeSlideIndex = bookletSlides.length - 1;
            renderSlideTabsAndEditor();
            showToast('Slide removido.', 'info');
        };

        window.updateCurrentSlideField = function(field, value) {
            const cur = getCurrentSlide();
            cur[field] = value;
            if (field === 'primaryLang') {
                cur.primaryHasAudio = false; cur.primaryPcm16 = null; cur.primaryWavDataUrl = '';
            }
            if (field === 'enableSecondary') {
                const secBox = document.getElementById('bk-secondary-controls');
                if (secBox) secBox.classList.toggle('hidden', !value);
            }
            if (field === 'enableTertiary') {
                const terBox = document.getElementById('bk-tertiary-controls');
                if (terBox) terBox.classList.toggle('hidden', !value);
            }
            renderSlideTabs();
            renderActiveSlideStage();
            updateSlideAudioBadges();
        };

        window.onChangeSecondaryLang = async function(newLangCode) {
            const cur = getCurrentSlide();
            cur.secondaryLang = newLangCode;
            cur.secondaryHasAudio = false; cur.secondaryPcm16 = null; cur.secondaryWavDataUrl = '';
            renderSlideTabs(); renderActiveSlideStage(); updateSlideAudioBadges();
            if (cur.primaryText && cur.primaryText.trim()) await window.translateCurrentSlideSecondaryFromPrimary();
        };

        window.onChangeTertiaryLang = async function(newLangCode) {
            const cur = getCurrentSlide();
            cur.tertiaryLang = newLangCode;
            cur.tertiaryHasAudio = false; cur.tertiaryPcm16 = null; cur.tertiaryWavDataUrl = '';
            renderSlideTabs(); renderActiveSlideStage(); updateSlideAudioBadges();
            if (cur.primaryText && cur.primaryText.trim()) await window.translateCurrentSlideTertiaryFromPrimary();
        };

        function renderSlideTabs() {
            const tabsEl = document.getElementById('bk-slide-tabs');
            const countEl = document.getElementById('bk-slides-count');
            if (countEl) countEl.textContent = String(bookletSlides.length);
            if (!tabsEl) return;

            tabsEl.innerHTML = bookletSlides.map((s, idx) => {
                const active = idx === activeSlideIndex;
                const langs = [s.primaryLang];
                if (s.enableSecondary !== false) langs.push(s.secondaryLang);
                if (s.enableTertiary) langs.push(s.tertiaryLang);
                return `
                    <button type="button" onclick="selectSlideTab(${idx})" class="px-3 py-1.5 rounded-xl font-extrabold text-[11px] flex items-center gap-1.5 flex-shrink-0 transition ${active ? 'bg-iuwe-blue text-white shadow-sm' : 'bg-white text-slate-900 border border-purple-300 hover:bg-purple-100'}">
                        <span>Slide ${idx + 1}</span>
                        <span class="px-1.5 py-0.5 rounded text-[9.5px] ${active ? 'bg-black/25 text-white' : 'bg-purple-100 text-purple-500'}">🎙️ ${escapeHtml(s.voice || 'Zephyr')} • ${escapeHtml(langs.join('/'))}</span>
                    </button>
                `;
            }).join('');
        }

        function updateSlideAudioBadges() {
            const cur = getCurrentSlide();

            const pStatus = document.getElementById('bk-primary-audio-status');
            const pPlay = document.getElementById('bk-btn-play-primary-audio');
            const pLabel = document.getElementById('bk-primary-audio-label');
            if (pStatus) {
                pStatus.innerHTML = cur.primaryHasAudio
                    ? `<i class="fa-solid fa-circle-check text-purple-700 mr-1"></i><span class="text-iuwe-blue">Áudio Pronto (${cur.primaryDurationSec}s • ${cur.voice || 'Zephyr'})</span>`
                    : `<i class="fa-solid fa-volume-xmark text-slate-400 mr-1"></i><span>Áudio Principal: Não gerado</span>`;
            }
            if (pPlay) pPlay.classList.toggle('hidden', !cur.primaryHasAudio);
            if (pLabel) pLabel.textContent = cur.primaryHasAudio ? 'Regerar Áudio (Idioma Principal)' : 'Gerar Áudio (Idioma Principal)';

            const sStatus = document.getElementById('bk-secondary-audio-status');
            const sPlay = document.getElementById('bk-btn-play-secondary-audio');
            const sLabel = document.getElementById('bk-secondary-audio-label');
            if (sStatus) {
                sStatus.innerHTML = cur.secondaryHasAudio
                    ? `<i class="fa-solid fa-circle-check text-purple-700 mr-1"></i><span class="text-iuwe-blue">Áudio Pronto (${cur.secondaryDurationSec}s • ${cur.voice || 'Zephyr'})</span>`
                    : `<i class="fa-solid fa-volume-xmark text-slate-400 mr-1"></i><span>Áudio Secundário (Opcional): Não gerado</span>`;
            }
            if (sPlay) sPlay.classList.toggle('hidden', !cur.secondaryHasAudio);
            if (sLabel) sLabel.textContent = cur.secondaryHasAudio ? 'Regerar Áudio (Idioma Secundário)' : 'Gerar Áudio (Idioma Secundário)';

            const tStatus = document.getElementById('bk-tertiary-audio-status');
            const tPlay = document.getElementById('bk-btn-play-tertiary-audio');
            const tLabel = document.getElementById('bk-tertiary-audio-label');
            if (tStatus) {
                tStatus.innerHTML = cur.tertiaryHasAudio
                    ? `<i class="fa-solid fa-circle-check text-purple-700 mr-1"></i><span class="text-iuwe-blue">Áudio Pronto (${cur.tertiaryDurationSec}s • ${cur.voice || 'Zephyr'})</span>`
                    : `<i class="fa-solid fa-volume-xmark text-slate-400 mr-1"></i><span>Áudio Terciário (Opcional): Não gerado</span>`;
            }
            if (tPlay) tPlay.classList.toggle('hidden', !cur.tertiaryHasAudio);
            if (tLabel) tLabel.textContent = cur.tertiaryHasAudio ? 'Regerar Áudio (Idioma Terciário)' : 'Gerar Áudio (Idioma Terciário)';
        }

        function renderSlideTabsAndEditor() {
            const cur = getCurrentSlide();
            renderSlideTabs();

            const headingEl = document.getElementById('editor-slide-heading');
            if (headingEl) {
                headingEl.innerHTML = `<i class="fa-solid fa-sliders text-sky-500 mr-1"></i>${uiT('slideBoxHeading')} ${activeSlideIndex + 1} ${uiT('ofWord').toLowerCase()} ${bookletSlides.length}`;
            }

            const voiceEl = document.getElementById('bk-voice-select');
            const speedEl = document.getElementById('bk-speed-select');
            const pLangEl = document.getElementById('bk-primary-lang');
            const pTextEl = document.getElementById('bk-primary-text');
            const hidePEl = document.getElementById('bk-hide-primary-text');

            const enSecEl = document.getElementById('bk-enable-secondary');
            const secControls = document.getElementById('bk-secondary-controls');
            const sLangEl = document.getElementById('bk-secondary-lang');
            const sTextEl = document.getElementById('bk-secondary-text');
            const hideSEl = document.getElementById('bk-hide-secondary-text');

            const enTerEl = document.getElementById('bk-enable-tertiary');
            const terControls = document.getElementById('bk-tertiary-controls');
            const tLangEl = document.getElementById('bk-tertiary-lang');
            const tTextEl = document.getElementById('bk-tertiary-text');
            const hideTEl = document.getElementById('bk-hide-tertiary-text');

            if (voiceEl) voiceEl.value = cur.voice || 'Zephyr';
            if (speedEl) speedEl.value = cur.speed || '1.0';
            if (pLangEl) pLangEl.value = cur.primaryLang || 'pt-BR';
            if (pTextEl) pTextEl.value = cur.primaryText || '';
            if (hidePEl) hidePEl.checked = Boolean(cur.hidePrimaryText);

            if (enSecEl) enSecEl.checked = cur.enableSecondary !== false;
            if (secControls) secControls.classList.toggle('hidden', cur.enableSecondary === false);
            if (sLangEl) sLangEl.value = cur.secondaryLang || 'fr-CA';
            if (sTextEl) sTextEl.value = cur.secondaryText || '';
            if (hideSEl) hideSEl.checked = Boolean(cur.hideSecondaryText);

            if (enTerEl) enTerEl.checked = Boolean(cur.enableTertiary);
            if (terControls) terControls.classList.toggle('hidden', !cur.enableTertiary);
            if (tLangEl) tLangEl.value = cur.tertiaryLang || 'en-CA';
            if (tTextEl) tTextEl.value = cur.tertiaryText || '';
            if (hideTEl) hideTEl.checked = Boolean(cur.hideTertiaryText);

            updateSlideAudioBadges();
            renderActiveSlideStage();
        }

        function buildLanguageStripHtml(langLabel, textVal, isHiddenByCreator, revealKey, onPlayJs, borderColorClass, badgeColorClass, btnClass) {
            const showHiddenMask = (revealKey in manualSlideHiddenOverride)
                ? Boolean(manualSlideHiddenOverride[revealKey])
                : Boolean(isHiddenByCreator && !revealedTextsInStage[revealKey]);

            return `
                <div class="bg-white/10 border ${borderColorClass} rounded-xl p-2.5 flex items-start justify-between gap-2">
                    <div class="min-w-0 flex-1 space-y-0.5">
                        <div class="flex items-center gap-1.5 flex-wrap">
                            <span class="text-[10px] font-extrabold ${badgeColorClass}">${escapeHtml(langLabel)}</span>
                            <button type="button" onclick="${escapeHtml(`toggleBookletStageHiddenText('${revealKey}', ${Boolean(isHiddenByCreator)})`)}" class="px-1.5 py-0.5 rounded bg-white/15 hover:bg-white/25 text-[9.5px] font-bold text-amber-300">
                                <i class="fa-solid ${showHiddenMask ? 'fa-eye' : 'fa-eye-slash'} mr-0.5"></i>${showHiddenMask ? uiT('revealTextBtn') : uiT('hideTextBtn')}
                            </button>
                        </div>
                        ${showHiddenMask
                            ? `<div onclick="${escapeHtml(`toggleBookletStageHiddenText('${revealKey}', ${Boolean(isHiddenByCreator)})`)}" class="cursor-pointer py-1 px-2.5 rounded-lg bg-slate-900/70 border border-dashed border-white/25 text-xs font-bold text-amber-200 italic">
                                🔒 ${uiT('hiddenTextMaskMsg')}
                               </div>`
                            : `<div class="text-xs sm:text-sm font-extrabold text-white leading-relaxed break-words whitespace-normal">"${escapeHtml(textVal || '...')}"</div>`
                        }
                    </div>
                    <button type="button" onclick="${escapeHtml(onPlayJs)}" class="px-2.5 py-1 rounded-lg ${btnClass} font-extrabold text-[10px] flex-shrink-0">
                        <i class="fa-solid fa-volume-high mr-1"></i>${uiT('listenBtn')}
                    </button>
                </div>
            `;
        }

        window.toggleBookletStageHiddenText = function(key, isHiddenByCreator) {
            const curMasked = (key in manualSlideHiddenOverride)
                ? Boolean(manualSlideHiddenOverride[key])
                : Boolean(isHiddenByCreator && !revealedTextsInStage[key]);
            if (curMasked) {
                revealedTextsInStage[key] = true;
                manualSlideHiddenOverride[key] = false;
            } else {
                revealedTextsInStage[key] = false;
                manualSlideHiddenOverride[key] = true;
            }
            renderActiveSlideStage();
        };

        window.renderActiveSlideStage = function() {
            const cur = getCurrentSlide();
            const bookTitle = document.getElementById('bk-title-input')?.value.trim() || 'Livreto Ilustrado IUWE';

            const counterEl = document.getElementById('stage-slide-counter');
            const titleEl = document.getElementById('stage-book-title');
            const voiceBadge = document.getElementById('stage-voice-badge');
            const badgeEl = document.getElementById('stage-page-badge');
            const imgEl = document.getElementById('stage-slide-image');
            const langsContainer = document.getElementById('stage-languages-container');

            if (counterEl) counterEl.textContent = `Slide ${activeSlideIndex + 1} / ${bookletSlides.length}`;
            if (titleEl) titleEl.textContent = `📖 ${bookTitle}`;
            if (voiceBadge) voiceBadge.textContent = `🎙️ ${cur.voice || 'Zephyr'} (${cur.speed || '1.0'}x)`;
            if (badgeEl) badgeEl.textContent = `${uiT('pageWord')} ${activeSlideIndex + 1} ${uiT('ofWord')} ${bookletSlides.length}`;
            if (imgEl) imgEl.src = cur.imageDataUrl || createContextualSceneDataUrl(cur.imagePrompt, activeSlideIndex);

            if (langsContainer) {
                const strips = [];
                strips.push(buildLanguageStripHtml(
                    `${translateLangLabel(cur.primaryLang, LANG_LABELS[cur.primaryLang])}`,
                    cur.primaryText,
                    Boolean(cur.hidePrimaryText),
                    `draft_${cur.id}_p`,
                    `playCurrentSlideAudio('primary')`,
                    'border-iuwe-blue/50',
                    'text-iuwe-blue',
                    'bg-purple-500 text-white'
                ));
                if (cur.enableSecondary !== false) {
                    strips.push(buildLanguageStripHtml(
                        `${translateLangLabel(cur.secondaryLang, LANG_LABELS[cur.secondaryLang])}`,
                        cur.secondaryText,
                        Boolean(cur.hideSecondaryText),
                        `draft_${cur.id}_s`,
                        `playCurrentSlideAudio('secondary')`,
                        'border-purple-400/50',
                        'text-purple-300',
                        'bg-purple-600 text-white'
                    ));
                }
                if (cur.enableTertiary) {
                    strips.push(buildLanguageStripHtml(
                        `${translateLangLabel(cur.tertiaryLang, LANG_LABELS[cur.tertiaryLang])}`,
                        cur.tertiaryText,
                        Boolean(cur.hideTertiaryText),
                        `draft_${cur.id}_t`,
                        `playCurrentSlideAudio('tertiary')`,
                        'border-purple-400/50',
                        'text-purple-300',
                        'bg-purple-600 text-white'
                    ));
                }
                langsContainer.innerHTML = strips.join('');
            }
        };

        window.handleCustomSlideImageUpload = function(event) {
            const file = event?.target?.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = async () => {
                const cur = getCurrentSlide();
                cur.imageDataUrl = await compressImageDataUrl(String(reader.result || ''));
                renderActiveSlideStage();
                showToast('Imagem externa carregada no Slide!', 'success');
            };
            reader.readAsDataURL(file);
        };

        window.translateCurrentSlidePrimaryText = async function() {
            const cur = getCurrentSlide();
            if (!cur.primaryText.trim()) {
                showToast('Digite um texto no Idioma Principal primeiro!', 'error');
                return;
            }
            const apiKey = await secureKeyVault.getApiKey();
            const targetName = LANG_ENGLISH_NAMES[cur.primaryLang] || 'Portuguese';
            try {
                cur.primaryText = await translateTextWithGemini(cur.primaryText, cur.primaryLang, targetName, apiKey);
                renderSlideTabsAndEditor();
                showToast(`Idioma Principal traduzido para ${LANG_LABELS[cur.primaryLang]}!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
            }
        };

        window.translateCurrentSlideSecondaryFromPrimary = async function() {
            const cur = getCurrentSlide();
            if (!cur.primaryText.trim()) {
                showToast('Preencha o texto do Idioma Principal primeiro!', 'error');
                return;
            }
            const apiKey = await secureKeyVault.getApiKey();
            const targetName = LANG_ENGLISH_NAMES[cur.secondaryLang] || 'English';
            try {
                cur.secondaryText = await translateTextWithGemini(cur.primaryText, cur.secondaryLang, targetName, apiKey);
                renderSlideTabsAndEditor();
                showToast(`Idioma Secundário traduzido para ${LANG_LABELS[cur.secondaryLang]}!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
            }
        };

        window.translateCurrentSlideTertiaryFromPrimary = async function() {
            const cur = getCurrentSlide();
            if (!cur.primaryText.trim()) {
                showToast('Preencha o texto do Idioma Principal primeiro!', 'error');
                return;
            }
            const apiKey = await secureKeyVault.getApiKey();
            const targetName = LANG_ENGLISH_NAMES[cur.tertiaryLang] || 'Spanish';
            try {
                cur.tertiaryText = await translateTextWithGemini(cur.primaryText, cur.tertiaryLang, targetName, apiKey);
                renderSlideTabsAndEditor();
                showToast(`Idioma Terciário traduzido para ${LANG_LABELS[cur.tertiaryLang]}!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
            }
        };

        window.generateCurrentSlideLangAudio = async function(tier) {
            const cur = getCurrentSlide();
            const apiKey = await secureKeyVault.getApiKey();
            const voice = cur.voice || document.getElementById('bk-voice-select')?.value || 'Zephyr';
            const speed = parseFloat(cur.speed || document.getElementById('bk-speed-select')?.value || '1.0');

            const btnId = tier === 'primary' ? 'bk-btn-gen-primary-audio' : (tier === 'secondary' ? 'bk-btn-gen-secondary-audio' : 'bk-btn-gen-tertiary-audio');
            const iconId = tier === 'primary' ? 'bk-primary-audio-icon' : (tier === 'secondary' ? 'bk-secondary-audio-icon' : 'bk-tertiary-audio-icon');
            const labelId = tier === 'primary' ? 'bk-primary-audio-label' : (tier === 'secondary' ? 'bk-secondary-audio-label' : 'bk-tertiary-audio-label');

            const btn = document.getElementById(btnId);
            const icon = document.getElementById(iconId);
            const label = document.getElementById(labelId);
            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Sintetizando...';

            try {
                if (tier === 'primary') {
                    if (!cur.primaryText.trim()) throw new Error('Digite a frase no Idioma Principal primeiro!');
                    const { pcm16, sampleRate } = await synthesizeCleanPcmWithGemini(cur.primaryText, voice, apiKey);
                    const adjusted = await applyCleanPlaybackSpeedToPcm(pcm16, sampleRate, speed);
                    const wavBlob = pcmToWavBlob(adjusted, sampleRate);
                    cur.primaryHasAudio = true;
                    cur.primaryPcm16 = adjusted;
                    cur.primarySampleRate = sampleRate;
                    cur.primaryWavUrl = URL.createObjectURL(wavBlob);
                    cur.primaryWavDataUrl = await blobToDataUrl(wavBlob);
                    cur.primaryDurationSec = Number((adjusted.length / sampleRate).toFixed(2));
                    showToast(`Áudio do Idioma Principal pronto (${cur.primaryDurationSec}s • Voz ${voice})!`, 'success');
                } else if (tier === 'secondary') {
                    const targetName = LANG_ENGLISH_NAMES[cur.secondaryLang] || 'English';
                    if (!cur.secondaryText.trim() || (cur.secondaryText.trim().toLowerCase() === cur.primaryText.trim().toLowerCase() && cur.secondaryLang !== cur.primaryLang)) {
                        cur.secondaryText = await translateTextWithGemini(cur.primaryText, cur.secondaryLang, targetName, apiKey);
                    }
                    const { pcm16, sampleRate } = await synthesizeCleanPcmWithGemini(cur.secondaryText, voice, apiKey);
                    const adjusted = await applyCleanPlaybackSpeedToPcm(pcm16, sampleRate, speed);
                    const wavBlob = pcmToWavBlob(adjusted, sampleRate);
                    cur.secondaryHasAudio = true;
                    cur.secondaryPcm16 = adjusted;
                    cur.secondarySampleRate = sampleRate;
                    cur.secondaryWavUrl = URL.createObjectURL(wavBlob);
                    cur.secondaryWavDataUrl = await blobToDataUrl(wavBlob);
                    cur.secondaryDurationSec = Number((adjusted.length / sampleRate).toFixed(2));
                    showToast(`Áudio do Idioma Secundário pronto (${cur.secondaryDurationSec}s • Voz ${voice})!`, 'success');
                } else if (tier === 'tertiary') {
                    const targetName = LANG_ENGLISH_NAMES[cur.tertiaryLang] || 'Spanish';
                    if (!cur.tertiaryText.trim() || (cur.tertiaryText.trim().toLowerCase() === cur.primaryText.trim().toLowerCase() && cur.tertiaryLang !== cur.primaryLang)) {
                        cur.tertiaryText = await translateTextWithGemini(cur.primaryText, cur.tertiaryLang, targetName, apiKey);
                    }
                    const { pcm16, sampleRate } = await synthesizeCleanPcmWithGemini(cur.tertiaryText, voice, apiKey);
                    const adjusted = await applyCleanPlaybackSpeedToPcm(pcm16, sampleRate, speed);
                    const wavBlob = pcmToWavBlob(adjusted, sampleRate);
                    cur.tertiaryHasAudio = true;
                    cur.tertiaryPcm16 = adjusted;
                    cur.tertiarySampleRate = sampleRate;
                    cur.tertiaryWavUrl = URL.createObjectURL(wavBlob);
                    cur.tertiaryWavDataUrl = await blobToDataUrl(wavBlob);
                    cur.tertiaryDurationSec = Number((adjusted.length / sampleRate).toFixed(2));
                    showToast(`Áudio do Idioma Terciário pronto (${cur.tertiaryDurationSec}s • Voz ${voice})!`, 'success');
                }
                renderSlideTabsAndEditor();
            } catch (err) {
                showToast(err.message, 'error');
            } finally {
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-microphone-lines';
                updateSlideAudioBadges();
            }
        };

        window.playCurrentSlideAudio = function(which) {
            const cur = getCurrentSlide();
            if (which === 'primary') {
                if (!cur.primaryHasAudio || !cur.primaryWavUrl) {
                    showToast('Clique em "Gerar Áudio (Idioma Principal)" para sintetizar a voz!', 'info');
                    return;
                }
                playAudioUrl(cur.primaryWavUrl);
            } else if (which === 'secondary') {
                if (!cur.secondaryHasAudio || !cur.secondaryWavUrl) {
                    showToast('Clique em "Gerar Áudio (Idioma Secundário)" para sintetizar a tradução!', 'info');
                    return;
                }
                playAudioUrl(cur.secondaryWavUrl);
            } else if (which === 'tertiary') {
                if (!cur.tertiaryHasAudio || !cur.tertiaryWavUrl) {
                    showToast('Clique em "Gerar Áudio (Idioma Terciário)" para sintetizar o 3º idioma!', 'info');
                    return;
                }
                playAudioUrl(cur.tertiaryWavUrl);
            }
        };

        window.generateAllSlidesVoicesAndTranslations = async function() {
            const btn = document.getElementById('btn-gen-all-booklet');
            const icon = document.getElementById('gen-all-bk-icon');
            const label = document.getElementById('gen-all-bk-label');
            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Sonorizando Todos os Slides...';

            const savedIdx = activeSlideIndex;
            iuweBatchGenerationActive = true;
            try {
                for (let i = 0; i < bookletSlides.length; i++) {
                    if (typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0) break;
                    activeSlideIndex = i;
                    renderSlideTabsAndEditor();
                    if (!bookletSlides[i].primaryHasAudio || !bookletSlides[i].primaryWavDataUrl) {
                        if (label) label.textContent = `Fila de Áudio: Slide ${i + 1}/${bookletSlides.length} (1º Idioma)...`;
                        await window.generateCurrentSlideLangAudio('primary');
                    }
                    if (typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0) break;
                    if (bookletSlides[i].enableSecondary !== false && (!bookletSlides[i].secondaryHasAudio || !bookletSlides[i].secondaryWavDataUrl)) {
                        if (label) label.textContent = `Fila de Áudio: Slide ${i + 1}/${bookletSlides.length} (2º Idioma)...`;
                        await window.generateCurrentSlideLangAudio('secondary');
                    }
                    if (typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0) break;
                    if (bookletSlides[i].enableTertiary && (!bookletSlides[i].tertiaryHasAudio || !bookletSlides[i].tertiaryWavDataUrl)) {
                        if (label) label.textContent = `Fila de Áudio: Slide ${i + 1}/${bookletSlides.length} (3º Idioma)...`;
                        await window.generateCurrentSlideLangAudio('tertiary');
                    }
                }
                activeSlideIndex = savedIdx;
                renderSlideTabsAndEditor();
                if (!(typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0)) {
                    showToast(`Todos os ${bookletSlides.length} slides prontos!`, 'success');
                }
            } catch (err) {
                showToast(err.message, 'error');
            } finally {
                iuweBatchGenerationActive = false;
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-wand-magic-sparkles';
                if (label) label.textContent = 'Traduzir & Gerar Vozes de Todos os Slides';
            }
        };

        // --- 5.4. OPÇÃO 4: VOCABULÁRIO IA (COMPLETO + GERADOR MODO FREE SEM CHAVE API + DITADO) ---
        let activeVocabIndex = 0;
        let vocabItems = [];
        const dictationOpenInStage = {};
        const dictationInputValues = {};
        const dictationFeedbackData = {};
        const dictationTargetMeta = {};
        const manualHiddenOverride = {};

        function makeDefaultVocabItems() {
            return [
                {
                    id: 'voc_1', voice: 'Zephyr', speed: '1.0',
                    usageNote: '',
                    primaryLang: 'pt-BR', primaryTerm: '', primarySentence: '', hidePrimaryText: false, removePrimaryDictation: false,
                    primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                    enableSecondary: true, secondaryLang: 'en-CA', secondaryTerm: '', secondarySentence: '', hideSecondaryText: false, removeSecondaryDictation: false,
                    secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                    enableTertiary: false, tertiaryLang: 'fr-CA', tertiaryTerm: '', tertiarySentence: '', hideTertiaryText: false, removeTertiaryDictation: false,
                    tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                }
            ];
        }

        function getCurrentVocabItem() {
            if (vocabItems.length === 0) vocabItems = makeDefaultVocabItems();
            if (activeVocabIndex < 0 || activeVocabIndex >= vocabItems.length) activeVocabIndex = 0;
            return vocabItems[activeVocabIndex];
        }

        window.onChangeGeneratorPrimaryLang = function(newLangCode) {
            if (!newLangCode) return;
            vocabItems.forEach(item => {
                item.primaryLang = newLangCode;
                item.primaryHasAudio = false; item.primaryPcm16 = null; item.primaryWavUrl = ''; item.primaryWavDataUrl = ''; item.primaryDurationSec = 0;
            });
            renderVocabTabsAndEditor();
            showToast(`Idioma Principal definido para ${LANG_LABELS[newLangCode] || newLangCode}!`, 'info');
        };

        window.selectCatalogTopicForVocab = function(selectedTopic) {
            if (!selectedTopic) return;
            const themeEl = document.getElementById('vc-theme-input');
            if (themeEl) themeEl.value = selectedTopic;
            renderActiveVocabStage();
            showToast(`Tema "${selectedTopic}" selecionado! Clique em "Gerar Vocabulário" para gerar os termos.`, 'info');
        };

        window.loadVocabPreset = function(presetKey) {
            const themeEl = document.getElementById('vc-theme-input');
            if (presetKey === 'saude') {
                if (themeEl) themeEl.value = 'Atendimento em Farmácia e Pronto-Socorro';
                vocabItems = [
                    {
                        id: 'voc_' + Date.now() + '_1', voice: 'Aoede', speed: '1.0',
                        usageNote: 'Essencial para informar alergias medicamentosas',
                        primaryLang: 'pt-BR', primaryTerm: 'Alergia a medicamentos', primarySentence: 'Eu tenho alergia a penicilina e preciso de um analgésico sem receita.', hidePrimaryText: true,
                        primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                        enableSecondary: true, secondaryLang: 'en-CA', secondaryTerm: 'Drug allergy / Over-the-counter painkiller', secondarySentence: 'I am allergic to penicillin and I need an over-the-counter painkiller.', hideSecondaryText: true,
                        secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                        enableTertiary: true, tertiaryLang: 'es-419', tertiaryTerm: 'Alergia a medicamentos / Analgésico de venta libre', tertiarySentence: 'Soy alérgico a la penicilina y necesito un analgésico de venta libre.', hideTertiaryText: true,
                        tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                    },
                    {
                        id: 'voc_' + Date.now() + '_2', voice: 'Kore', speed: '1.0',
                        usageNote: 'Pergunta sobre posologia e horários do remédio',
                        primaryLang: 'pt-BR', primaryTerm: 'Posologia (De quantas em quantas horas)', primarySentence: 'De quantas em quantas horas eu devo tomar este comprimido?', hidePrimaryText: true,
                        primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                        enableSecondary: true, secondaryLang: 'en-CA', secondaryTerm: 'Dosage instructions', secondarySentence: 'How often should I take this tablet?', hideSecondaryText: true,
                        secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                        enableTertiary: true, tertiaryLang: 'es-419', tertiaryTerm: 'Dosis recomendada', tertiarySentence: '¿Cada cuántas horas debo tomar esta pastilla?', hideTertiaryText: true,
                        tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                    }
                ];
            } else if (presetKey === 'trades') {
                if (themeEl) themeEl.value = 'Construção Civil, Indústria, Ferramentas e Segurança (Skilled Trades)';
                vocabItems = [
                    {
                        id: 'voc_' + Date.now() + '_1', voice: 'Orus', speed: '1.0',
                        usageNote: 'Norma obrigatória de EPI (PPE) antes de entrar na obra ou fábrica',
                        primaryLang: 'pt-BR', primaryTerm: 'Equipamento de Proteção Individual (EPI)', primarySentence: 'Use sempre o capacete, os óculos de proteção e as botas com biqueira de aço no canteiro de obras.', hidePrimaryText: true,
                        primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                        enableSecondary: true, secondaryLang: 'en-CA', secondaryTerm: 'Personal Protective Equipment (PPE) / Steel-toe boots', secondarySentence: 'Always wear your hard hat, safety glasses, and steel-toe boots on the job site.', hideSecondaryText: true,
                        secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                        enableTertiary: true, tertiaryLang: 'fr-CA', tertiaryTerm: 'Équipement de protection individuelle (ÉPI)', tertiarySentence: 'Portez toujours votre casque de sécurité, vos lunettes de protection et vos bottes à cap d\'acier sur le chantier.', hideTertiaryText: true,
                        tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                    },
                    {
                        id: 'voc_' + Date.now() + '_2', voice: 'Puck', speed: '1.0',
                        usageNote: 'Bloqueio elétrico e manutenção segura de máquinas (LOTO)',
                        primaryLang: 'pt-BR', primaryTerm: 'Desligar o disjuntor e medir a tensão', primarySentence: 'Desligue o disjuntor principal e verifique a tensão com o multímetro antes de iniciar a manutenção.', hidePrimaryText: true,
                        primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                        enableSecondary: true, secondaryLang: 'en-CA', secondaryTerm: 'Shut off the breaker and test the voltage', secondarySentence: 'Shut off the main breaker and check the voltage with the multimeter before starting maintenance.', hideSecondaryText: true,
                        secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                        enableTertiary: true, tertiaryLang: 'fr-CA', tertiaryTerm: 'Couper le disjoncteur et vérifier la tension', tertiarySentence: 'Coupez le disjoncteur principal et vérifiez la tension avec le multimètre avant de commencer l\'entretien.', hideTertiaryText: true,
                        tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                    }
                ];
            } else if (presetKey === 'imigracao') {
                if (themeEl) themeEl.value = 'Entrevista de Imigração e Alfândega no Aeroporto';
                vocabItems = [
                    {
                        id: 'voc_' + Date.now() + '_1', voice: 'Orus', speed: '1.0',
                        usageNote: 'Pergunta padrão do oficial de fronteira',
                        primaryLang: 'pt-BR', primaryTerm: 'Motivo da viagem e tempo de estadia', primarySentence: 'Estou viajando a turismo e vou ficar por duas semanas em Toronto.', hidePrimaryText: true,
                        primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                        enableSecondary: true, secondaryLang: 'en-CA', secondaryTerm: 'Purpose of trip and length of stay', secondarySentence: 'I am travelling for tourism and I will stay for two weeks in Toronto.', hideSecondaryText: true,
                        secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                        enableTertiary: true, tertiaryLang: 'fr-CA', tertiaryTerm: 'Motif du voyage et durée du séjour', tertiarySentence: 'Je voyage pour le tourisme et je vais rester deux semaines à Montréal.', hideTertiaryText: true,
                        tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                    }
                ];
            } else {
                if (themeEl) themeEl.value = 'Daily Standup e Reunião de Tecnologia';
                vocabItems = makeDefaultVocabItems();
            }
            activeVocabIndex = 0;
            renderVocabTabsAndEditor();
            showToast('Tema de vocabulário carregado!', 'info');
        };

        // Gerador Temático de Vocabulário com Suporte Nativo a Modo Free (Sem Chave API) + Gemini IA (Quando Chave Ativa)
        async function buildFreeModeVocabularyItems(theme, level, count, maxWords, pLang, sLang, tLang) {
            const baseTemplatesPt = [
                {
                    usageNote: `Expressão essencial sobre ${theme} (${level})`,
                    termPt: `Comunicação sobre ${theme}`,
                    sentPt: `Precisamos alinhar os detalhes principais sobre ${theme} ainda hoje.`
                },
                {
                    usageNote: `Pergunta prática aplicada ao contexto de ${theme}`,
                    termPt: `Informação e orientação prática`,
                    sentPt: `Com licença, você pode me explicar como funciona este procedimento de ${theme}?`
                },
                {
                    usageNote: `Resolução de problemas no cotidiano de ${theme}`,
                    termPt: `Resolver com prioridade e segurança`,
                    sentPt: `Vamos verificar todos os requisitos de ${theme} antes de avançar para a próxima etapa.`
                },
                {
                    usageNote: `Acompanhamento e confirmação em ${theme}`,
                    termPt: `Confirmar o andamento e o prazo`,
                    sentPt: `Tudo está pronto e confirmado para concluirmos nossa atividade de ${theme}.`
                },
                {
                    usageNote: `Colaboração em equipe no tema ${theme}`,
                    termPt: `Trabalhar em conjunto na solução`,
                    sentPt: `Nossa equipe revisou as orientações de ${theme} para garantir o melhor resultado.`
                },
                {
                    usageNote: `Solicitação educada em situações de ${theme}`,
                    termPt: `Solicitar apoio especializado`,
                    sentPt: `Eu gostaria de pedir sua ajuda para revisar este ponto importante sobre ${theme}.`
                },
                {
                    usageNote: `Planejamento e organização em ${theme}`,
                    termPt: `Organizar as etapas com clareza`,
                    sentPt: `Organizamos cada etapa do cronograma de ${theme} com antecedência.`
                },
                {
                    usageNote: `Boas práticas recomendadas em ${theme}`,
                    termPt: `Seguir o padrão de qualidade`,
                    sentPt: `É fundamental seguir todas as recomendações de segurança e qualidade em ${theme}.`
                },
                {
                    usageNote: `Atendimento e esclarecimento de dúvidas em ${theme}`,
                    termPt: `Esclarecer dúvidas com rapidez`,
                    sentPt: `Estou à disposição para responder qualquer dúvida sobre ${theme} agora mesmo.`
                },
                {
                    usageNote: `Conclusão bem-sucedida em ${theme}`,
                    termPt: `Finalizar a etapa com sucesso`,
                    sentPt: `Concluímos todas as tarefas previstas para ${theme} dentro do horário combinado.`
                }
            ];

            const results = [];
            for (let i = 0; i < count; i++) {
                const tpl = baseTemplatesPt[i % baseTemplatesPt.length];
                let rawSentPt = tpl.sentPt;
                const words = rawSentPt.split(/\s+/);
                if (words.length > maxWords) {
                    rawSentPt = words.slice(0, maxWords).join(' ').replace(/[.,;:]$/, '') + '.';
                }

                const pTerm = pLang === 'pt-BR' ? tpl.termPt : await translateTextWithGemini(tpl.termPt, pLang, LANG_ENGLISH_NAMES[pLang] || pLang, '');
                const pSent = pLang === 'pt-BR' ? rawSentPt : await translateTextWithGemini(rawSentPt, pLang, LANG_ENGLISH_NAMES[pLang] || pLang, '');
                const sTerm = await translateTextWithGemini(tpl.termPt, sLang, LANG_ENGLISH_NAMES[sLang] || sLang, '');
                const sSent = await translateTextWithGemini(rawSentPt, sLang, LANG_ENGLISH_NAMES[sLang] || sLang, '');
                const tTerm = await translateTextWithGemini(tpl.termPt, tLang, LANG_ENGLISH_NAMES[tLang] || tLang, '');
                const tSent = await translateTextWithGemini(rawSentPt, tLang, LANG_ENGLISH_NAMES[tLang] || tLang, '');

                results.push({
                    usageNote: tpl.usageNote,
                    primaryTerm: pTerm,
                    primarySentence: pSent,
                    secondaryTerm: sTerm,
                    secondarySentence: sSent,
                    tertiaryTerm: tTerm,
                    tertiarySentence: tSent
                });
            }
            return results;
        }

        window.generateVocabularyListWithGeminiAI = async function() {
            const theme = (document.getElementById('vc-theme-input')?.value || '').trim();
            if (!theme) {
                showToast('Digite ou escolha um tema no catálogo para gerar o vocabulário!', 'error');
                return;
            }
            const apiKey = await secureKeyVault.getApiKey();
            const cur = getCurrentVocabItem();
            const pLang = document.getElementById('vc-generator-lang-select')?.value || cur.primaryLang || 'pt-BR';
            const sLang = cur.secondaryLang || 'en-CA';
            const tLang = cur.tertiaryLang || 'fr-CA';
            const enSec = cur.enableSecondary !== false;
            const enTer = Boolean(cur.enableTertiary);
            const level = document.getElementById('vc-level-select')?.value || 'Intermediário (B1-B2)';
            const count = parseInt(document.getElementById('vc-count-select')?.value || '3', 10);
            const maxWords = parseInt(document.getElementById('vc-sentence-length-select')?.value || '11', 10);

            const btn = document.getElementById('btn-generate-ai-vocab');
            const icon = document.getElementById('gen-vocab-icon');
            const label = document.getElementById('gen-vocab-label');
            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Gerando Termos e Traduções Contextuais...';

            try {
                let parsedList = null;

                if (apiKey) {
                    const prompt = [
                        `You are an expert multilingual language teacher creating a structured vocabulary study set for the topic: "${theme}" (Level: ${level}).`,
                        `Generate exactly ${count} practical vocabulary items / idiomatic expressions.`,
                        `CRITICAL RULES FOR SENTENCE LENGTH, MEANING, AND FULL SPELLING:`,
                        `1. MEANING FIRST, THEN WORD LIMIT ON PRIMARY LANGUAGE ONLY: The sentence length limit of up to ${maxWords} words applies ONLY to "primarySentence" in the selected primary language (${LANG_ENGLISH_NAMES[pLang] || pLang}). Coherent, natural meaning is the #1 priority, followed by staying around or up to ${maxWords} words.`,
                        `2. COMPLETE & FAITHFUL TRANSLATIONS (NO TRUNCATION): The translated versions ("secondarySentence" in ${LANG_ENGLISH_NAMES[sLang] || sLang} and "tertiarySentence" in ${LANG_ENGLISH_NAMES[tLang] || tLang}) MUST be accurate, complete, and natural translations of "primarySentence", EVEN IF they exceed ${maxWords} words in the target language. Never cut words or sacrifice meaning in translations to fit a word count.`,
                        `3. NO INTERNET ABBREVIATIONS OR SHORTHAND: NEVER use chat abbreviations, acronyms, or internet reductions (for example, NEVER write "svp" instead of "s'il vous plaît", "stp", "vc", "pq", "tbh", "idk", "gonna/wanna" unless the original explicitly studies slang). Always write every word out in full standard spelling so students learn proper orthography and the TTS voice pronounces every word clearly.`,
                        `For each item, provide:`,
                        `- "usageNote": a concise usage tip in Portuguese explaining when/how to use the expression.`,
                        `- "primaryTerm" and "primarySentence" in ${LANG_ENGLISH_NAMES[pLang] || pLang} (${pLang}). ${REGIONAL_STYLE_NOTES[pLang] || ''}`,
                        `- "secondaryTerm" and "secondarySentence" (complete, unabbreviated translation of primaryTerm and primarySentence) in ${LANG_ENGLISH_NAMES[sLang] || sLang} (${sLang}). ${REGIONAL_STYLE_NOTES[sLang] || ''}`,
                        `- "tertiaryTerm" and "tertiarySentence" (complete, unabbreviated translation of primaryTerm and primarySentence) in ${LANG_ENGLISH_NAMES[tLang] || tLang} (${tLang}). ${REGIONAL_STYLE_NOTES[tLang] || ''}`,
                        `Respond ONLY with valid JSON array of objects in this exact format:`,
                        `[{"usageNote":"...","primaryTerm":"...","primarySentence":"...","secondaryTerm":"...","secondarySentence":"...","tertiaryTerm":"...","tertiarySentence":"..."}]`
                    ].join('\n');

                    parsedList = await enqueueGeminiPriorityCall(async () => {
                        let allRateLimited = false;
                        const startIdx = textCursor;
                        for (let attempt = 0; attempt < TEXT_MODELS.length; attempt++) {
                            const idx = (startIdx + attempt) % TEXT_MODELS.length;
                            const model = TEXT_MODELS[idx];
                            if (textModelCooldownUntilMs[model] && Date.now() < textModelCooldownUntilMs[model]) {
                                allRateLimited = true;
                                continue;
                            }
                            textCursor = (idx + 1) % TEXT_MODELS.length;
                            try {
                                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
                                    body: JSON.stringify({
                                        contents: [{ parts: [{ text: prompt }] }],
                                        generationConfig: { responseMimeType: 'application/json' }
                                    })
                                });
                                if (res.ok) {
                                    const data = await res.json();
                                    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
                                    const arr = JSON.parse(rawText);
                                    if (Array.isArray(arr) && arr.length > 0) {
                                        return arr;
                                    }
                                }
                                if (res.status === 429) {
                                    allRateLimited = true;
                                    textModelCooldownUntilMs[model] = Date.now() + (IUWE_RATE_LIMIT_LOCK_SECONDS * 1000);
                                    continue;
                                }
                            } catch (e) {}
                        }
                        if (allRateLimited && typeof startCooldownTicker === 'function') {
                            startCooldownTicker(IUWE_RATE_LIMIT_LOCK_SECONDS, 'Limite temporário de geração de texto IA atingido — aguardando 60s.');
                        }
                        return null;
                    }, 1, 'VOCAB_AI_GEN');
                }

                // Se estiver em Modo Free (sem chave API) ou se a cota da chave tiver acabado, gera gratuitamente!
                if (!parsedList) {
                    parsedList = await buildFreeModeVocabularyItems(theme, level, count, maxWords, pLang, sLang, tLang);
                }

                const voicesCycle = ['Zephyr', 'Puck', 'Aoede', 'Orus', 'Kore'];
                vocabItems = parsedList.slice(0, count).map((entry, idx) => ({
                    id: 'voc_' + Date.now() + '_' + idx,
                    voice: voicesCycle[idx % voicesCycle.length],
                    speed: '1.0',
                    usageNote: entry.usageNote || `Termo essencial sobre ${theme}`,
                    primaryLang: pLang,
                    primaryTerm: entry.primaryTerm || '',
                    primarySentence: entry.primarySentence || '',
                    hidePrimaryText: true,
                    removePrimaryDictation: false,
                    primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                    enableSecondary: enSec,
                    secondaryLang: sLang,
                    secondaryTerm: entry.secondaryTerm || '',
                    secondarySentence: entry.secondarySentence || '',
                    hideSecondaryText: true,
                    removeSecondaryDictation: false,
                    secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                    enableTertiary: enTer,
                    tertiaryLang: tLang,
                    tertiaryTerm: entry.tertiaryTerm || '',
                    tertiarySentence: entry.tertiarySentence || '',
                    hideTertiaryText: true,
                    removeTertiaryDictation: false,
                    tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
                }));

                activeVocabIndex = 0;
                renderVocabTabsAndEditor();
                showToast(`${vocabItems.length} termos e frases gerados (${apiKey && !isFreeAudioModeActive ? 'IA Gemini' : 'Modo Free Gratuito'})!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
            } finally {
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-wand-magic-sparkles';
                if (label) label.textContent = '✨ Gerar Vocabulário & Frases Contextuais (IA / Modo Free)';
            }
        };

        window.selectVocabTab = function(index) {
            if (index < 0 || index >= vocabItems.length) return;
            activeVocabIndex = index;
            renderVocabTabsAndEditor();
        };

        window.navigateDraftVocab = function(delta) {
            const next = (activeVocabIndex + delta + vocabItems.length) % vocabItems.length;
            activeVocabIndex = next;
            renderVocabTabsAndEditor();
        };

        window.addNewBlankVocabItem = function() {
            const maxItems = (typeof IUWE_RESOURCE_LIMITS !== 'undefined' && IUWE_RESOURCE_LIMITS.vocabMaxItems) ? IUWE_RESOURCE_LIMITS.vocabMaxItems : 6;
            if (vocabItems.length >= maxItems) {
                showToast('Máximo de ' + maxItems + ' termos por pacote atingido para manter o arquivo leve!', 'error');
                return;
            }
            const cur = getCurrentVocabItem();
            const nextNum = vocabItems.length + 1;
            vocabItems.push({
                id: 'voc_' + Date.now() + '_' + nextNum,
                voice: cur.voice || 'Zephyr',
                speed: cur.speed || '1.0',
                usageNote: `Expressão personalizada #${nextNum}`,
                primaryLang: cur.primaryLang || 'pt-BR',
                primaryTerm: 'Novo Termo Personalizado',
                primarySentence: 'Digite uma frase de exemplo com este termo...',
                hidePrimaryText: true,
                removePrimaryDictation: Boolean(cur.removePrimaryDictation),
                primaryHasAudio: false, primaryPcm16: null, primarySampleRate: 24000, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                enableSecondary: cur.enableSecondary !== false,
                secondaryLang: cur.secondaryLang || 'en-CA',
                secondaryTerm: '',
                secondarySentence: '',
                hideSecondaryText: true,
                removeSecondaryDictation: Boolean(cur.removeSecondaryDictation),
                secondaryHasAudio: false, secondaryPcm16: null, secondarySampleRate: 24000, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                enableTertiary: Boolean(cur.enableTertiary),
                tertiaryLang: cur.tertiaryLang || 'fr-CA',
                tertiaryTerm: '',
                tertiarySentence: '',
                hideTertiaryText: true,
                removeTertiaryDictation: Boolean(cur.removeTertiaryDictation),
                tertiaryHasAudio: false, tertiaryPcm16: null, tertiarySampleRate: 24000, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
            });
            activeVocabIndex = vocabItems.length - 1;
            renderVocabTabsAndEditor();
            showToast('Novo termo personalizado adicionado!', 'success');
        };

        window.duplicateCurrentVocabItem = function() {
            const maxItems = (typeof IUWE_RESOURCE_LIMITS !== 'undefined' && IUWE_RESOURCE_LIMITS.vocabMaxItems) ? IUWE_RESOURCE_LIMITS.vocabMaxItems : 6;
            if (vocabItems.length >= maxItems) {
                showToast('Máximo de ' + maxItems + ' termos por pacote atingido para manter o arquivo leve!', 'error');
                return;
            }
            const cur = getCurrentVocabItem();
            const copy = {
                ...cur,
                id: 'voc_' + Date.now() + '_dup',
                primaryTerm: (cur.primaryTerm || 'Termo') + ' (Cópia)',
                primaryHasAudio: false, primaryPcm16: null, primaryWavUrl: '', primaryWavDataUrl: '', primaryDurationSec: 0,
                secondaryHasAudio: false, secondaryPcm16: null, secondaryWavUrl: '', secondaryWavDataUrl: '', secondaryDurationSec: 0,
                tertiaryHasAudio: false, tertiaryPcm16: null, tertiaryWavUrl: '', tertiaryWavDataUrl: '', tertiaryDurationSec: 0
            };
            vocabItems.splice(activeVocabIndex + 1, 0, copy);
            activeVocabIndex = activeVocabIndex + 1;
            renderVocabTabsAndEditor();
            showToast('Termo duplicado!', 'info');
        };

        window.removeCurrentVocabItem = function() {
            if (vocabItems.length <= 1) {
                showToast('O caderno precisa ter pelo menos 1 termo!', 'error');
                return;
            }
            vocabItems.splice(activeVocabIndex, 1);
            if (activeVocabIndex >= vocabItems.length) activeVocabIndex = vocabItems.length - 1;
            renderVocabTabsAndEditor();
            showToast('Termo removido do pacote.', 'info');
        };

        window.updateCurrentVocabField = function(field, value) {
            const cur = getCurrentVocabItem();
            cur[field] = value;
            if (field === 'primaryLang') {
                cur.primaryHasAudio = false; cur.primaryPcm16 = null; cur.primaryWavDataUrl = '';
            }
            if (field === 'enableSecondary') {
                vocabItems.forEach(it => { it.enableSecondary = Boolean(value); });
                const secBox = document.getElementById('vc-secondary-controls');
                if (secBox) secBox.classList.toggle('hidden', !value);
            }
            if (field === 'enableTertiary') {
                vocabItems.forEach(it => { it.enableTertiary = Boolean(value); });
                const terBox = document.getElementById('vc-tertiary-controls');
                if (terBox) terBox.classList.toggle('hidden', !value);
            }
            renderVocabTabs();
            renderActiveVocabStage();
            updateVocabAudioBadges();
        };

        window.onChangeVocabSecondaryLang = async function(newLang) {
            const cur = getCurrentVocabItem();
            cur.secondaryLang = newLang;
            cur.secondaryHasAudio = false; cur.secondaryPcm16 = null; cur.secondaryWavDataUrl = '';
            renderVocabTabs(); renderActiveVocabStage(); updateVocabAudioBadges();
            await window.translateCurrentVocabTierFromPrimary('secondary');
        };

        window.onChangeVocabTertiaryLang = async function(newLang) {
            const cur = getCurrentVocabItem();
            cur.tertiaryLang = newLang;
            cur.tertiaryHasAudio = false; cur.tertiaryPcm16 = null; cur.tertiaryWavDataUrl = '';
            renderVocabTabs(); renderActiveVocabStage(); updateVocabAudioBadges();
            await window.translateCurrentVocabTierFromPrimary('tertiary');
        };

        window.translateCurrentVocabTierFromPrimary = async function(tier) {
            const cur = getCurrentVocabItem();
            if (!cur.primaryTerm.trim() && !cur.primarySentence.trim()) {
                showToast('Preencha o Termo e a Frase no Idioma Principal primeiro!', 'error');
                return;
            }
            const apiKey = await secureKeyVault.getApiKey();
            const langCode = tier === 'secondary' ? cur.secondaryLang : cur.tertiaryLang;
            const targetName = LANG_ENGLISH_NAMES[langCode] || 'English';

            try {
                if (cur.primaryTerm.trim()) {
                    const tTerm = await translateTextWithGemini(cur.primaryTerm, langCode, targetName, apiKey);
                    if (tier === 'secondary') cur.secondaryTerm = tTerm; else cur.tertiaryTerm = tTerm;
                }
                if (cur.primarySentence.trim()) {
                    const tSent = await translateTextWithGemini(cur.primarySentence, langCode, targetName, apiKey);
                    if (tier === 'secondary') cur.secondarySentence = tSent; else cur.tertiarySentence = tSent;
                }
                renderVocabTabsAndEditor();
                showToast(`Traduzido para ${LANG_LABELS[langCode]}!`, 'success');
            } catch (err) {
                showToast(err.message, 'error');
            }
        };

        function renderVocabTabs() {
            const tabsEl = document.getElementById('vc-item-tabs');
            const countEl = document.getElementById('vc-items-count');
            if (countEl) countEl.textContent = String(vocabItems.length);
            if (!tabsEl) return;

            tabsEl.innerHTML = vocabItems.map((item, idx) => {
                const active = idx === activeVocabIndex;
                const fullTerm = item.primaryTerm || `Termo ${idx + 1}`;
                return `
                    <button type="button" onclick="selectVocabTab(${idx})" class="w-full px-3 py-2 rounded-xl font-extrabold text-xs flex items-center justify-between gap-2 text-left transition ${active ? 'iuwe-selected-white border shadow-sm' : 'bg-white text-slate-900 border border-iuwe-purpleBorder hover:bg-iuwe-purple'}">
                        <span class="truncate">📌 #${idx + 1} — ${escapeHtml(fullTerm)}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] flex-shrink-0 ${active ? 'bg-black/25 text-white' : 'bg-sky-50 text-purple-500'}">🎙️ ${escapeHtml(item.voice || 'Zephyr')} (${escapeHtml(item.speed || '1.0')}x)</span>
                    </button>
                `;
            }).join('');
        }

        function updateVocabAudioBadges() {
            const cur = getCurrentVocabItem();

            const pStatus = document.getElementById('vc-primary-audio-status');
            const pPlay = document.getElementById('vc-btn-play-primary-audio');
            const pLabel = document.getElementById('vc-primary-audio-label');
            if (pStatus) {
                pStatus.innerHTML = cur.primaryHasAudio
                    ? `<i class="fa-solid fa-circle-check text-purple-700 mr-1"></i><span class="text-iuwe-blue">Áudio Pronto (${cur.primaryDurationSec}s • ${cur.voice || 'Zephyr'})</span>`
                    : `<i class="fa-solid fa-volume-xmark text-slate-400 mr-1"></i><span>Áudio Principal: Não gerado</span>`;
            }
            if (pPlay) pPlay.classList.toggle('hidden', !cur.primaryHasAudio);
            if (pLabel) pLabel.textContent = cur.primaryHasAudio ? 'Regerar Áudio (Idioma Principal)' : 'Gerar Áudio (Idioma Principal)';

            const sStatus = document.getElementById('vc-secondary-audio-status');
            const sPlay = document.getElementById('vc-btn-play-secondary-audio');
            const sLabel = document.getElementById('vc-secondary-audio-label');
            if (sStatus) {
                sStatus.innerHTML = cur.secondaryHasAudio
                    ? `<i class="fa-solid fa-circle-check text-purple-700 mr-1"></i><span class="text-iuwe-blue">Áudio Pronto (${cur.secondaryDurationSec}s • ${cur.voice || 'Zephyr'})</span>`
                    : `<i class="fa-solid fa-volume-xmark text-slate-400 mr-1"></i><span>Áudio Secundário: Não gerado</span>`;
            }
            if (sPlay) sPlay.classList.toggle('hidden', !cur.secondaryHasAudio);
            if (sLabel) sLabel.textContent = cur.secondaryHasAudio ? 'Regerar Áudio (Idioma Secundário)' : 'Gerar Áudio (Idioma Secundário)';

            const tStatus = document.getElementById('vc-tertiary-audio-status');
            const tPlay = document.getElementById('vc-btn-play-tertiary-audio');
            const tLabel = document.getElementById('vc-tertiary-audio-label');
            if (tStatus) {
                tStatus.innerHTML = cur.tertiaryHasAudio
                    ? `<i class="fa-solid fa-circle-check text-purple-700 mr-1"></i><span class="text-iuwe-blue">Áudio Pronto (${cur.tertiaryDurationSec}s • ${cur.voice || 'Zephyr'})</span>`
                    : `<i class="fa-solid fa-volume-xmark text-slate-400 mr-1"></i><span>Áudio Terciário: Não gerado</span>`;
            }
            if (tPlay) tPlay.classList.toggle('hidden', !cur.tertiaryHasAudio);
            if (tLabel) tLabel.textContent = cur.tertiaryHasAudio ? 'Regerar Áudio (Idioma Terciário)' : 'Gerar Áudio (Idioma Terciário)';
        }

        function renderVocabTabsAndEditor() {
            const cur = getCurrentVocabItem();
            renderVocabTabs();

            const headingEl = document.getElementById('editor-vocab-heading');
            if (headingEl) {
                headingEl.innerHTML = `<i class="fa-solid fa-sliders text-purple-700 mr-1"></i>${uiT('termBoxHeading')} ${activeVocabIndex + 1} ${uiT('ofWord').toLowerCase()} ${vocabItems.length}`;
            }

            const voiceEl = document.getElementById('vc-voice-select');
            const speedEl = document.getElementById('vc-speed-select');
            const noteEl = document.getElementById('vc-note-input');

            const pLangEl = document.getElementById('vc-primary-lang');
            const pTermEl = document.getElementById('vc-primary-term');
            const pSentEl = document.getElementById('vc-primary-sentence');
            const hidePEl = document.getElementById('vc-hide-primary-text');
            const remPDictEl = document.getElementById('vc-remove-primary-dictation');

            const enSecEl = document.getElementById('vc-enable-secondary');
            const secControls = document.getElementById('vc-secondary-controls');
            const sLangEl = document.getElementById('vc-secondary-lang');
            const sTermEl = document.getElementById('vc-secondary-term');
            const sSentEl = document.getElementById('vc-secondary-sentence');
            const hideSEl = document.getElementById('vc-hide-secondary-text');
            const remSDictEl = document.getElementById('vc-remove-secondary-dictation');

            const enTerEl = document.getElementById('vc-enable-tertiary');
            const terControls = document.getElementById('vc-tertiary-controls');
            const tLangEl = document.getElementById('vc-tertiary-lang');
            const tTermEl = document.getElementById('vc-tertiary-term');
            const tSentEl = document.getElementById('vc-tertiary-sentence');
            const hideTEl = document.getElementById('vc-hide-tertiary-text');
            const remTDictEl = document.getElementById('vc-remove-tertiary-dictation');

            if (voiceEl) voiceEl.value = cur.voice || 'Zephyr';
            if (speedEl) speedEl.value = cur.speed || '1.0';
            if (noteEl) noteEl.value = cur.usageNote || '';

            const gLangEl = document.getElementById('vc-generator-lang-select');
            if (gLangEl) gLangEl.value = cur.primaryLang || 'pt-BR';
            if (pLangEl) pLangEl.value = cur.primaryLang || 'pt-BR';
            if (pTermEl) pTermEl.value = cur.primaryTerm || '';
            if (pSentEl) pSentEl.value = cur.primarySentence || '';
            if (hidePEl) hidePEl.checked = cur.hidePrimaryText !== false;
            if (remPDictEl) remPDictEl.checked = Boolean(cur.removePrimaryDictation);

            if (enSecEl) enSecEl.checked = cur.enableSecondary !== false;
            if (secControls) secControls.classList.toggle('hidden', cur.enableSecondary === false);
            if (sLangEl) sLangEl.value = cur.secondaryLang || 'en-CA';
            if (sTermEl) sTermEl.value = cur.secondaryTerm || '';
            if (sSentEl) sSentEl.value = cur.secondarySentence || '';
            if (hideSEl) hideSEl.checked = cur.hideSecondaryText !== false;
            if (remSDictEl) remSDictEl.checked = Boolean(cur.removeSecondaryDictation);

            if (enTerEl) enTerEl.checked = Boolean(cur.enableTertiary);
            if (terControls) terControls.classList.toggle('hidden', !cur.enableTertiary);
            if (tLangEl) tLangEl.value = cur.tertiaryLang || 'fr-CA';
            if (tTermEl) tTermEl.value = cur.tertiaryTerm || '';
            if (tSentEl) tSentEl.value = cur.tertiarySentence || '';
            if (hideTEl) hideTEl.checked = cur.hideTertiaryText !== false;
            if (remTDictEl) remTDictEl.checked = Boolean(cur.removeTertiaryDictation);

            updateVocabAudioBadges();
            renderActiveVocabStage();
        }

        function isStripCurrentlyMasked(revealKey, isHiddenByCreator) {
            if (revealKey in manualHiddenOverride) return Boolean(manualHiddenOverride[revealKey]);
            if (dictationOpenInStage[revealKey] && !revealedTextsInStage[revealKey]) return true;
            return Boolean(isHiddenByCreator && !revealedTextsInStage[revealKey]);
        }

        window.updateDictationInputValue = function(key, val) {
            dictationInputValues[key] = val;
        };

        window.toggleVocabDictationBox = function(key, isHiddenByCreator) {
            const nextState = !dictationOpenInStage[key];
            dictationOpenInStage[key] = nextState;
            if (nextState) {
                revealedTextsInStage[key] = false;
                manualHiddenOverride[key] = true;
            } else {
                delete manualHiddenOverride[key];
            }
            renderActiveVocabStage();
        };

        function computeLocalDictationCoach(userAttempt, targetTerm, targetSentence, langLabel) {
            const clean = s => String(s || '').toLowerCase().replace(/[.,!?;:"“”()’'\-]/g, ' ').replace(/\s+/g, ' ').trim();
            const uClean = clean(userAttempt);
            const fullSpoken = [targetTerm, targetSentence].filter(Boolean).join('. ');
            const fullClean = clean(fullSpoken);
            const sClean = clean(targetSentence);

            const uWords = uClean ? uClean.split(' ') : [];
            const fullWords = fullClean ? fullClean.split(' ') : [];
            const sWords = sClean ? sClean.split(' ') : [];

            let matchedFull = 0;
            const missedFull = [];
            fullWords.forEach(w => {
                if (uWords.includes(w)) matchedFull++;
                else missedFull.push(w);
            });

            let matchedSent = 0;
            sWords.forEach(w => {
                if (uWords.includes(w)) matchedSent++;
            });

            const scoreFull = fullWords.length > 0 ? Math.min(100, Math.round((matchedFull / fullWords.length) * 100)) : 100;
            const scoreSent = sWords.length > 0 ? Math.min(100, Math.round((matchedSent / sWords.length) * 100)) : 0;
            const score = Math.max(scoreFull, scoreSent);

            let praise = '🌟 Excelente iniciativa! Praticar a escuta ativa escrevendo o que ouviu acelera sua fluência!';
            if (score >= 95) praise = '🎉 Sensacional! Ouvido super afiado! Você captou o áudio com precisão exemplar!';
            else if (score >= 70) praise = '👏 Muito bem! Você compreendeu a maior parte do termo e da frase falada!';
            else if (score >= 40) praise = '💪 Ótimo esforço! Você já conseguiu identificar palavras-chave importantes do áudio!';

            let tip = 'Continue ouvindo o áudio acompanhando o termo e a frase revelados para consolidar som e escrita.';
            if (score >= 95) {
                tip = `Você dominou a escuta e a escrita deste item em ${langLabel}! Experimente repetir em voz alta imitando o ritmo do locutor.`;
            } else if (missedFull.length > 0) {
                const sampleMissed = missedFull.slice(0, 5).join('", "');
                tip = `Observe especialmente as palavras "${sampleMissed}" e ouça novamente acompanhando o texto revelado!`;
            }

            return {
                praise,
                accuracyScore: score,
                userText: userAttempt,
                targetTerm: targetTerm || '',
                targetSentence: targetSentence || '',
                targetText: fullSpoken,
                tips: tip
            };
        }

        window.evaluateVocabDictation = async function(key) {
            const userAttempt = (dictationInputValues[key] || '').trim();
            const meta = dictationTargetMeta[key] || { langLabel: 'Idioma', termVal: '', sentVal: '' };
            revealedTextsInStage[key] = true;
            manualHiddenOverride[key] = false;

            if (!userAttempt) {
                showToast('Digite o que você ouviu no campo de ditado antes de corrigir!', 'info');
                renderActiveVocabStage();
                return;
            }

            const localCoach = computeLocalDictationCoach(userAttempt, meta.termVal, meta.sentVal, meta.langLabel);
            dictationFeedbackData[key] = { loading: false, ...localCoach };
            renderActiveVocabStage();
        };

        window.toggleStageHiddenText = function(key, isHiddenByCreator) {
            const currentlyMasked = isStripCurrentlyMasked(key, isHiddenByCreator);
            if (currentlyMasked) {
                revealedTextsInStage[key] = true;
                manualHiddenOverride[key] = false;
                if (dictationOpenInStage[key] && (dictationInputValues[key] || '').trim().length > 0) {
                    window.evaluateVocabDictation(key);
                    return;
                }
            } else {
                revealedTextsInStage[key] = false;
                manualHiddenOverride[key] = true;
            }
            renderActiveVocabStage();
        };

        function buildVocabStripHtml(langLabel, termVal, sentVal, isHiddenByCreator, revealKey, onPlayJs, borderColorClass, badgeColorClass, btnClass, removeDictation = false) {
            dictationTargetMeta[revealKey] = { langLabel, termVal: termVal || '', sentVal: sentVal || '' };
            const showHiddenMask = isStripCurrentlyMasked(revealKey, isHiddenByCreator);
            const isDictationOpen = !removeDictation && Boolean(dictationOpenInStage[revealKey]);
            const userTypedVal = dictationInputValues[revealKey] || '';
            const fb = dictationFeedbackData[revealKey] || null;

            return `
                <div class="bg-white/10 border ${borderColorClass} rounded-xl p-3 space-y-2">
                    <div class="flex items-start justify-between gap-2.5">
                        <div class="min-w-0 flex-1 space-y-1">
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <span class="text-[10px] font-extrabold ${badgeColorClass}">${escapeHtml(langLabel)}</span>
                                <button type="button" onclick="${escapeHtml(`toggleStageHiddenText('${revealKey}', ${Boolean(isHiddenByCreator)})`)}" class="px-1.5 py-0.5 rounded bg-white/15 hover:bg-white/25 text-[9.5px] font-bold text-amber-300">
                                    <i class="fa-solid ${showHiddenMask ? 'fa-eye' : 'fa-eye-slash'} mr-0.5"></i>${showHiddenMask ? uiT('revealTextBtn') : uiT('hideTextBtn')}
                                </button>
                                ${!removeDictation ? `
                                <button type="button" onclick="${escapeHtml(`toggleVocabDictationBox('${revealKey}', ${Boolean(isHiddenByCreator)})`)}" class="px-2 py-0.5 rounded ${isDictationOpen ? 'bg-emerald-400 text-white' : 'bg-iuwe-blue/25 hover:bg-iuwe-blue/40 text-emerald-200 border border-purple-400/40'} text-[9.5px] font-extrabold transition">
                                    <i class="fa-solid fa-pen-to-square mr-0.5"></i>${isDictationOpen ? uiT('closeDictationBtn') : uiT('practiceDictationBtn')}
                                </button>
                                ` : ''}
                            </div>
                            ${showHiddenMask
                                ? `<div onclick="${escapeHtml(`toggleStageHiddenText('${revealKey}', ${Boolean(isHiddenByCreator)})`)}" class="cursor-pointer py-1.5 px-2.5 rounded-lg bg-slate-900/70 border border-dashed border-white/25 text-xs font-bold text-amber-200 italic">
                                    🔒 ${uiT('hiddenTextMaskMsg')}
                                   </div>`
                                : `<div class="space-y-0.5">
                                    <div class="text-xs sm:text-sm font-extrabold text-amber-300 break-words whitespace-normal">📌 ${escapeHtml(termVal || '...')}</div>
                                    <div class="text-xs sm:text-sm font-bold text-white leading-relaxed break-words whitespace-normal">"${escapeHtml(sentVal || '...')}"</div>
                                   </div>`
                            }
                        </div>
                        <button type="button" onclick="${escapeHtml(onPlayJs)}" class="px-2.5 py-1.5 rounded-lg ${btnClass} font-extrabold text-[10px] flex-shrink-0">
                            <i class="fa-solid fa-volume-high mr-1"></i>${uiT('listenBtn')}
                        </button>
                    </div>

                    ${isDictationOpen ? `
                        <div class="pt-2 border-t border-white/15 space-y-2">
                            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5">
                                <input type="text" value="${escapeHtml(userTypedVal)}" oninput="${escapeHtml(`updateDictationInputValue('${revealKey}', this.value)`)}" onkeydown="if(event.key==='Enter'){event.preventDefault();evaluateVocabDictation('${escapeHtml(revealKey)}');}" placeholder="${escapeHtml(uiT('dictationInputPlaceholder'))}" class="flex-1 bg-slate-950/80 border border-purple-400/50 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-sky-300">
                                <button type="button" onclick="${escapeHtml(`evaluateVocabDictation('${revealKey}')`)}" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-white font-extrabold text-[10.5px] flex items-center justify-center gap-1 flex-shrink-0 shadow-sm">
                                    <i class="fa-solid fa-wand-magic-sparkles"></i> <span>${uiT('checkDictationBtn')}</span>
                                </button>
                            </div>
                            ${fb ? `
                                <div class="rounded-xl p-2.5 bg-emerald-950/90 border border-purple-400/60 text-left space-y-1.5 shadow-inner">
                                    <div class="flex items-center justify-between gap-2 flex-wrap">
                                        <span class="text-[11px] font-extrabold text-sky-200">${escapeHtml(fb.praise || '')}</span>
                                        ${fb.accuracyScore !== null && fb.accuracyScore !== undefined ? `
                                            <span class="px-2 py-0.5 rounded-full bg-emerald-400/20 border border-sky-300/40 text-emerald-200 font-extrabold text-[10px]">
                                                🎯 ${uiT('accuracyLabel')}: ${escapeHtml(String(fb.accuracyScore))}%
                                            </span>
                                        ` : ''}
                                    </div>
                                    <div class="text-[10.5px] text-slate-200 bg-black/30 rounded-lg px-2.5 py-1.5 space-y-0.5">
                                        <div><span class="font-extrabold text-amber-300">✍️ ${uiT('youWroteLabel')}:</span> "${escapeHtml(fb.userText || '')}"</div>
                                        <div><span class="font-extrabold text-sky-200">✅ ${uiT('fullAudioLabel')}:</span> 📌 <b>${escapeHtml(fb.targetTerm || '')}</b> — "${escapeHtml(fb.targetSentence || fb.targetText || '')}"</div>
                                    </div>
                                    <div class="text-[11px] font-bold text-emerald-100 leading-relaxed">
                                        💡 <b>${uiT('pedagogicalTipLabel')}:</b> ${escapeHtml(fb.tips || '')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    ` : ''}
                </div>
            `;
        }

        window.renderActiveVocabStage = function() {
            const cur = getCurrentVocabItem();
            const themeTitle = document.getElementById('vc-theme-input')?.value.trim() || 'Vocabulário IA';

            const counterEl = document.getElementById('stage-vocab-counter');
            const themeEl = document.getElementById('stage-vocab-theme');
            const voiceBadge = document.getElementById('stage-vocab-voice-badge');
            const badgeEl = document.getElementById('stage-vocab-badge');
            const noteEl = document.getElementById('stage-vocab-note');
            const langsContainer = document.getElementById('stage-vocab-languages-container');

            if (counterEl) counterEl.textContent = `${uiT('termWord')} ${activeVocabIndex + 1} / ${vocabItems.length}`;
            if (themeEl) themeEl.textContent = `📚 ${themeTitle}`;
            if (voiceBadge) voiceBadge.textContent = `🎙️ ${cur.voice || 'Zephyr'} (${cur.speed || '1.0'}x)`;
            if (badgeEl) badgeEl.textContent = `${uiT('termWord')} ${activeVocabIndex + 1} ${uiT('ofWord')} ${vocabItems.length}`;
            if (noteEl) noteEl.textContent = `💡 ${uiT('hintShortLabel')}: ${translatePostMetaText(cur.usageNote || 'Expressão contextualizada')}`;

            if (langsContainer) {
                const strips = [];
                strips.push(buildVocabStripHtml(
                    `${translateLangLabel(cur.primaryLang, LANG_LABELS[cur.primaryLang])}`,
                    cur.primaryTerm,
                    cur.primarySentence,
                    (cur.hidePrimaryText !== false),
                    `draft_${cur.id}_p`,
                    `playCurrentVocabAudio('primary')`,
                    'border-iuwe-blue/50',
                    'text-iuwe-blue',
                    'bg-purple-500 text-white',
                    Boolean(cur.removePrimaryDictation)
                ));
                if (cur.enableSecondary !== false) {
                    strips.push(buildVocabStripHtml(
                        `${translateLangLabel(cur.secondaryLang, LANG_LABELS[cur.secondaryLang])}`,
                        cur.secondaryTerm,
                        cur.secondarySentence,
                        (cur.hideSecondaryText !== false),
                        `draft_${cur.id}_s`,
                        `playCurrentVocabAudio('secondary')`,
                        'border-purple-400/50',
                        'text-purple-300',
                        'bg-purple-600 text-white',
                        Boolean(cur.removeSecondaryDictation)
                    ));
                }
                if (cur.enableTertiary) {
                    strips.push(buildVocabStripHtml(
                        `${translateLangLabel(cur.tertiaryLang, LANG_LABELS[cur.tertiaryLang])}`,
                        cur.tertiaryTerm,
                        cur.tertiarySentence,
                        (cur.hideTertiaryText !== false),
                        `draft_${cur.id}_t`,
                        `playCurrentVocabAudio('tertiary')`,
                        'border-purple-400/50',
                        'text-purple-300',
                        'bg-purple-600 text-white',
                        Boolean(cur.removeTertiaryDictation)
                    ));
                }
                langsContainer.innerHTML = strips.join('');
            }
        };

        window.generateCurrentVocabLangAudio = async function(tier) {
            const cur = getCurrentVocabItem();
            const apiKey = await secureKeyVault.getApiKey();
            const voice = cur.voice || document.getElementById('vc-voice-select')?.value || 'Zephyr';
            const speed = parseFloat(cur.speed || document.getElementById('vc-speed-select')?.value || '1.0');

            const btnId = tier === 'primary' ? 'vc-btn-gen-primary-audio' : (tier === 'secondary' ? 'vc-btn-gen-secondary-audio' : 'vc-btn-gen-tertiary-audio');
            const iconId = tier === 'primary' ? 'vc-primary-audio-icon' : (tier === 'secondary' ? 'vc-secondary-audio-icon' : 'vc-tertiary-audio-icon');
            const labelId = tier === 'primary' ? 'vc-primary-audio-label' : (tier === 'secondary' ? 'vc-secondary-audio-label' : 'vc-tertiary-audio-label');

            const btn = document.getElementById(btnId);
            const icon = document.getElementById(iconId);
            const label = document.getElementById(labelId);
            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Sintetizando...';

            try {
                if (tier === 'primary') {
                    const spoken = `${cur.primaryTerm}. ${cur.primarySentence}`.trim();
                    if (!spoken || spoken === '.') throw new Error('Preencha o termo e a frase principal primeiro!');
                    const rawSynth = await synthesizeCleanPcmWithGemini(spoken, voice, apiKey);
                    const adjusted = await applyCleanPlaybackSpeedToPcm(rawSynth.pcm16, rawSynth.sampleRate, speed);
                    const sampleRate = rawSynth.sampleRate;
                    const wavBlob = pcmToWavBlob(adjusted, sampleRate);
                    cur.primaryHasAudio = true;
                    cur.primaryPcm16 = adjusted;
                    cur.primarySampleRate = sampleRate;
                    cur.primaryWavUrl = URL.createObjectURL(wavBlob);
                    cur.primaryWavDataUrl = await blobToDataUrl(wavBlob);
                    cur.primaryDurationSec = Number((adjusted.length / sampleRate).toFixed(2));
                    showToast(`Áudio do Idioma Principal pronto (${cur.primaryDurationSec}s • Voz ${voice})!`, 'success');
                } else if (tier === 'secondary') {
                    if (!cur.secondaryTerm.trim() && !cur.secondarySentence.trim()) {
                        await window.translateCurrentVocabTierFromPrimary('secondary');
                    }
                    const spoken = `${cur.secondaryTerm}. ${cur.secondarySentence}`.trim();
                    const rawSynth = await synthesizeCleanPcmWithGemini(spoken, voice, apiKey);
                    const adjusted = await applyCleanPlaybackSpeedToPcm(rawSynth.pcm16, rawSynth.sampleRate, speed);
                    const sampleRate = rawSynth.sampleRate;
                    const wavBlob = pcmToWavBlob(adjusted, sampleRate);
                    cur.secondaryHasAudio = true;
                    cur.secondaryPcm16 = adjusted;
                    cur.secondarySampleRate = sampleRate;
                    cur.secondaryWavUrl = URL.createObjectURL(wavBlob);
                    cur.secondaryWavDataUrl = await blobToDataUrl(wavBlob);
                    cur.secondaryDurationSec = Number((adjusted.length / sampleRate).toFixed(2));
                    showToast(`Áudio do Idioma Secundário pronto (${cur.secondaryDurationSec}s • Voz ${voice})!`, 'success');
                } else if (tier === 'tertiary') {
                    if (!cur.tertiaryTerm.trim() && !cur.tertiarySentence.trim()) {
                        await window.translateCurrentVocabTierFromPrimary('tertiary');
                    }
                    const spoken = `${cur.tertiaryTerm}. ${cur.tertiarySentence}`.trim();
                    const rawSynth = await synthesizeCleanPcmWithGemini(spoken, voice, apiKey);
                    const adjusted = await applyCleanPlaybackSpeedToPcm(rawSynth.pcm16, rawSynth.sampleRate, speed);
                    const sampleRate = rawSynth.sampleRate;
                    const wavBlob = pcmToWavBlob(adjusted, sampleRate);
                    cur.tertiaryHasAudio = true;
                    cur.tertiaryPcm16 = adjusted;
                    cur.tertiarySampleRate = sampleRate;
                    cur.tertiaryWavUrl = URL.createObjectURL(wavBlob);
                    cur.tertiaryWavDataUrl = await blobToDataUrl(wavBlob);
                    cur.tertiaryDurationSec = Number((adjusted.length / sampleRate).toFixed(2));
                    showToast(`Áudio do Idioma Terciário pronto (${cur.tertiaryDurationSec}s • Voz ${voice})!`, 'success');
                }
                renderVocabTabsAndEditor();
            } catch (err) {
                showToast(err.message, 'error');
            } finally {
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-microphone-lines';
                updateVocabAudioBadges();
            }
        };

        window.playCurrentVocabAudio = function(which) {
            const cur = getCurrentVocabItem();
            if (which === 'primary') {
                if (!cur.primaryHasAudio || !cur.primaryWavUrl) {
                    showToast('Clique em "Gerar Áudio (Idioma Principal)" para sintetizar a voz!', 'info');
                    return;
                }
                playAudioUrl(cur.primaryWavUrl);
            } else if (which === 'secondary') {
                if (!cur.secondaryHasAudio || !cur.secondaryWavUrl) {
                    showToast('Clique em "Gerar Áudio (Idioma Secundário)" para sintetizar o 2º idioma!', 'info');
                    return;
                }
                playAudioUrl(cur.secondaryWavUrl);
            } else if (which === 'tertiary') {
                if (!cur.tertiaryHasAudio || !cur.tertiaryWavUrl) {
                    showToast('Clique em "Gerar Áudio (Idioma Terciário)" para sintetizar o 3º idioma!', 'info');
                    return;
                }
                playAudioUrl(cur.tertiaryWavUrl);
            }
        };

        window.generateAllVocabVoicesAndTranslations = async function() {
            const btn = document.getElementById('btn-gen-all-vocab-audios');
            const icon = document.getElementById('gen-all-vc-icon');
            const label = document.getElementById('gen-all-vc-label');
            if (btn) btn.disabled = true;
            if (icon) icon.className = 'fa-solid fa-spinner animate-spin';
            if (label) label.textContent = 'Sonorizando Todos os Termos...';

            const savedIdx = activeVocabIndex;
            iuweBatchGenerationActive = true;
            try {
                for (let i = 0; i < vocabItems.length; i++) {
                    if (typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0) break;
                    activeVocabIndex = i;
                    renderVocabTabsAndEditor();
                    if (!vocabItems[i].primaryHasAudio || !vocabItems[i].primaryWavDataUrl) {
                        if (label) label.textContent = `Fila de Áudio: Termo ${i + 1}/${vocabItems.length} (1º Idioma)...`;
                        await window.generateCurrentVocabLangAudio('primary');
                    }
                    if (typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0) break;
                    if (vocabItems[i].enableSecondary !== false && (!vocabItems[i].secondaryHasAudio || !vocabItems[i].secondaryWavDataUrl)) {
                        if (label) label.textContent = `Fila de Áudio: Termo ${i + 1}/${vocabItems.length} (2º Idioma)...`;
                        await window.generateCurrentVocabLangAudio('secondary');
                    }
                    if (typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0) break;
                    if (vocabItems[i].enableTertiary && (!vocabItems[i].tertiaryHasAudio || !vocabItems[i].tertiaryWavDataUrl)) {
                        if (label) label.textContent = `Fila de Áudio: Termo ${i + 1}/${vocabItems.length} (3º Idioma)...`;
                        await window.generateCurrentVocabLangAudio('tertiary');
                    }
                }
                activeVocabIndex = savedIdx;
                renderVocabTabsAndEditor();
                if (!(typeof getRemainingCooldownSeconds === 'function' && getRemainingCooldownSeconds() > 0)) {
                    showToast(`Todos os ${vocabItems.length} termos sonorizados com sucesso!`, 'success');
                }
            } catch (err) {
                showToast(err.message, 'error');
            } finally {
                iuweBatchGenerationActive = false;
                if (btn) btn.disabled = false;
                if (icon) icon.className = 'fa-solid fa-microphone-lines';
                if (label) label.textContent = 'Traduzir & Gerar Vozes de Todos os Termos';
            }
        };

        // ============================================================================
        // 6. PERSISTÊNCIA UNIFICADA: 100% FIREBASE RTDB + PORTEIRO APPS SCRIPT (MODERAÇÃO ANTI-OFENSA + AUTO-TAGS, ZERO DRIVE)
        // ============================================================================
        const ARCHIVE_STORAGE_KEY = 'iuwe_step5_unified_archive_v1';
        const DEFAULT_FIREBASE_URL = 'https://iuwe-v2-d06c4-default-rtdb.firebaseio.com/';
        const DEFAULT_GAS_WEBHOOK = (typeof window.IUWE_GAS_DOORKEEPER_URL === 'string' && window.IUWE_GAS_DOORKEEPER_URL.trim()) ? window.IUWE_GAS_DOORKEEPER_URL.trim() : 'https://script.google.com/macros/s/AKfycbxbWXGA2dMJB4y_etqm1aNIwarTYmRs2o5jgnk2sbCphrXCyUprQoIze30NvRRSAkKT/exec';

        let archiveRecords = [];
        let streamMemoryCache = {};
        let lifecycleAuditLog = [];
        let showArchivedRecordsInPersonal = false;
        let feedSlideIndexMap = {};
        let feedVocabIndexMap = {};
        let activeShareRecordId = '';
        let activeInspectRecordId = '';

        function remoteCloudFetch(url, opts) {
            return window.fetch(url, opts);
        }

        function appendLifecycleAuditEvent(archiveId, eventType, summary, statusAfter) {
            lifecycleAuditLog.unshift({
                eventId: 'EVT-' + Date.now() + '-' + Math.random().toString(36).slice(2, 5).toUpperCase(),
                archiveId,
                eventType,
                actor: getActorHandle(),
                summary,
                statusAfter,
                timestampIso: new Date().toISOString()
            });
        }

        function detectRecordModuleType(rec) {
            if (!rec) return 'audiocast';
            const mod = (rec.publicationMetadata && rec.publicationMetadata.module) || rec.moduleType || '';
            if (mod === 'vocabulario_ia' || mod === 'vocabulario' || (rec.archiveId && rec.archiveId.startsWith('ARC-VC-')) || Array.isArray(rec.vocabItems)) return 'vocabulario_ia';
            if (mod === 'livreto' || (rec.archiveId && rec.archiveId.startsWith('ARC-BK-')) || Array.isArray(rec.slides)) return 'livreto';
            if (mod === 'flashcard' || (rec.archiveId && rec.archiveId.startsWith('ARC-FC-')) || (rec.publicationMetadata && rec.publicationMetadata.flashcardData)) return 'flashcard';
            return 'audiocast';
        }

        function getCreatorHandleFromRecord(rec) {
            const raw = rec?.creatorMetadata?.handle || rec?.authorHandle || getActorHandle();
            return normalizeTo8DigitHandle(raw);
        }

        function getCreatorNameFromRecord(rec) {
            const h = getCreatorHandleFromRecord(rec);
            return 'Criador ' + h;
        }

        function getTagsFromRecord(rec) {
            const raw = rec?.publicationMetadata?.tags || rec?.tags || [];
            const arr = Array.isArray(raw) ? raw : String(raw).split(/[\s,]+/).filter(Boolean);
            return arr.map(t => {
                const s = String(t).trim();
                return s.startsWith('#') ? s : ('#' + s);
            });
        }

        function getLanguagesFromRecord(rec) {
            const codes = new Set();
            const meta = rec?.publicationMetadata || {};
            if (Array.isArray(meta.languages)) {
                meta.languages.forEach(c => { if (c) codes.add(String(c).trim()); });
            }
            if (Array.isArray(meta.blocks)) {
                meta.blocks.forEach(b => { if (b && b.langCode) codes.add(String(b.langCode).trim()); });
            }
            if (meta.flashcardData) {
                if (meta.flashcardData.front?.langCode) codes.add(String(meta.flashcardData.front.langCode).trim());
                if (Array.isArray(meta.flashcardData.backTranslations)) {
                    meta.flashcardData.backTranslations.forEach(b => { if (b && b.langCode) codes.add(String(b.langCode).trim()); });
                }
            }
            const slides = meta.slides || rec?.slides || [];
            if (Array.isArray(slides)) {
                slides.forEach(s => {
                    if (s?.primaryLang) codes.add(String(s.primaryLang).trim());
                    if (s?.enableSecondary !== false && s?.secondaryLang) codes.add(String(s.secondaryLang).trim());
                    if (s?.enableTertiary && s?.tertiaryLang) codes.add(String(s.tertiaryLang).trim());
                });
            }
            const vItems = meta.vocabItems || rec?.vocabItems || [];
            if (Array.isArray(vItems)) {
                vItems.forEach(it => {
                    if (it?.primaryLang) codes.add(String(it.primaryLang).trim());
                    if (it?.enableSecondary !== false && it?.secondaryLang) codes.add(String(it.secondaryLang).trim());
                    if (it?.enableTertiary && it?.tertiaryLang) codes.add(String(it.tertiaryLang).trim());
                });
            }
            const tags = getTagsFromRecord(rec);
            Object.keys(LANG_LABELS).forEach(code => {
                if (tags.some(t => t.toLowerCase() === ('#' + code).toLowerCase())) {
                    codes.add(code);
                }
            });
            return Array.from(codes);
        }

        function getLevelFromRecord(rec) {
            const explicit = rec?.publicationMetadata?.cefrLevel || rec?.cefrLevel || '';
            if (explicit) return String(explicit).trim();
            const tags = getTagsFromRecord(rec).join(' ').toLowerCase();
            if (/a1|a2|iniciante/.test(tags)) return 'Iniciante (A1-A2)';
            if (/c1|avan[cç]ado/.test(tags)) return 'Avançado (C1)';
            if (/c2|fluente/.test(tags)) return 'Fluente (C2)';
            return 'Intermediário (B1-B2)';
        }

        function loadLocalRecords() {
            try {
                const raw = localStorage.getItem(ARCHIVE_STORAGE_KEY);
                archiveRecords = raw ? JSON.parse(raw) : [];
            } catch (e) { archiveRecords = []; }
        }

        function saveLocalRecords() {
            try {
                const slim = archiveRecords.map(r => {
                    const copy = JSON.parse(JSON.stringify(r));
                    if (copy.generatedWavBase64 && copy.generatedWavBase64.length > 1800000) delete copy.generatedWavBase64;
                    if (copy.compiledSlideHtml && copy.compiledSlideHtml.length > 1800000) delete copy.compiledSlideHtml;
                    return copy;
                });
                localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(slim.slice(0, 60)));
            } catch (e) {
                try {
                    const ultraSlim = archiveRecords.slice(0, 30).map(r => {
                        const copy = JSON.parse(JSON.stringify(r));
                        delete copy.compiledSlideHtml;
                        if (copy.generatedWavBase64 && copy.generatedWavBase64.length > 350000) delete copy.generatedWavBase64;
                        return copy;
                    });
                    localStorage.setItem(ARCHIVE_STORAGE_KEY, JSON.stringify(ultraSlim));
                } catch (e2) {}
            }
        }

        // Motor Local + Porteiro Apps Script de Moderação Anti-Ofensa e Classificação Automática de Tags
        const IUWE_FORBIDDEN_CONTENT_REGEX = /(\b(idiota|imbecil|otario|otário|babaca|vagabunda|puta|vadia|prostituta|escroto|arrombado|merda|bosta|caralho|foda-se|fodase|vai se foder|matar voce|estupro|estuprar|macaco|crioulo|viado|bicha|sapatão|sapatao|traveco|retardado|aleijado|nazista|hitler|bitch|whore|slut|cunt|fuck you|motherfucker|nigger|nigga|faggot|retard|kill yourself|rape|misogyny|hate women|white power|nazi|maricon|maricón|pendejo|zorra|putain|salope|connard|enculé)\b|mulher tem que|lugar de mulher|odeio mulheres|mulheres sao inferiores|<script\b|javascript\s*:|onerror\s*=)/i;

        const IUWE_AUTO_TAG_THEMES = [
            { tag: '#viagem', regex: /\b(viagem|viajar|aeroporto|voo|hotel|passaporte|mala|trem|estacao|turismo|trip|travel|airport|flight|train|station|luggage|voyage|avion|gare|viaje|vuelo)\b/i },
            { tag: '#gastronomia', regex: /\b(cafe|café|restaurante|comida|almoco|almoço|jantar|pao|pão|padaria|cozinha|cardapio|menu|coffee|bakery|food|dinner|lunch|breakfast|croissant|pain|cuisine|repas|cena)\b/i },
            { tag: '#trabalho', regex: /\b(trabalho|reuniao|reunião|emprego|escritorio|escritório|carreira|entrevista|projeto|equipe|work|job|meeting|office|career|interview|project|travail|bureau|entretien|trabajo|oficina)\b/i },
            { tag: '#cotidiano', regex: /\b(bom dia|boa tarde|boa noite|como vai|obrigado|por favor|rotina|casa|familia|família|amigo|hello|good morning|please|thank you|daily|family|bonjour|merci|hola|gracias)\b/i },
            { tag: '#saude', regex: /\b(saude|saúde|medico|médico|hospital|farmacia|farmácia|remedio|remédio|dor|exercicio|health|doctor|pharmacy|medicine|pain|santé|médecin|salud)\b/i },
            { tag: '#tecnologia', regex: /\b(tecnologia|computador|internet|software|programacao|programação|codigo|código|ia|inteligencia artificial|dados|app|technology|computer|code|data|technologie|ordinateur)\b/i },
            { tag: '#cultura', regex: /\b(cultura|historia|história|musica|música|arte|livro|cinema|filme|festival|tradicao|tradição|culture|history|music|art|movie|book|histoire|musique)\b/i },
            { tag: '#estudos', regex: /\b(estudo|estudar|escola|universidade|aula|professor|aluno|idioma|lingua|língua|aprender|gramatica|pronuncia|study|school|university|learn|language|étudier|école|langue)\b/i },
            { tag: '#compras', regex: /\b(compra|comprar|loja|preco|preço|pagar|cartao|cartão|dinheiro|desconto|mercado|shop|store|price|pay|money|card|magasin|prix|acheter|tienda|precio)\b/i }
        ];

        function extractRecordTextForModeration(record) {
            const meta = (record && record.publicationMetadata) ? record.publicationMetadata : {};
            const parts = [record?.title || '', meta.title || '', meta.bookTitle || '', meta.themeTitle || ''];
            if (Array.isArray(meta.blocks)) meta.blocks.forEach(b => parts.push(b.spokenText || '', b.sourceText || ''));
            if (meta.flashcardData) {
                if (meta.flashcardData.front) parts.push(meta.flashcardData.front.text || '', meta.flashcardData.front.contextHint || '');
                if (Array.isArray(meta.flashcardData.backTranslations)) meta.flashcardData.backTranslations.forEach(bt => parts.push(bt.text || '', bt.phoneticOrNote || ''));
            }
            if (Array.isArray(meta.slides)) meta.slides.forEach(s => parts.push(s.primaryText || '', s.secondaryText || '', s.tertiaryText || '', s.imagePrompt || ''));
            if (Array.isArray(meta.vocabItems)) meta.vocabItems.forEach(v => parts.push(v.primaryTerm || '', v.primarySentence || '', v.secondaryTerm || '', v.secondarySentence || '', v.tertiaryTerm || '', v.tertiarySentence || '', v.usageNote || ''));
            return parts.join(' ');
        }

        function computeAutoClassifiedTags(record, fullText) {
            const meta = (record && record.publicationMetadata) ? record.publicationMetadata : {};
            const mod = String(meta.module || record?.moduleType || 'audiocast').trim().toLowerCase();
            const set = new Set(['#' + mod]);
            if (Array.isArray(meta.tags)) {
                meta.tags.forEach(t => {
                    const clean = String(t || '').trim();
                    if (clean) set.add(clean.startsWith('#') ? clean : ('#' + clean));
                });
            }
            let matched = 0;
            IUWE_AUTO_TAG_THEMES.forEach(rule => {
                if (rule.regex.test(fullText)) {
                    set.add(rule.tag);
                    matched++;
                }
            });
            if (matched === 0) {
                set.add('#cotidiano');
                set.add('#idiomas');
            }
            const cefr = String(meta.cefrLevel || '').toLowerCase();
            if (cefr.includes('a1') || cefr.includes('iniciante')) set.add('#iniciante');
            else if (cefr.includes('c1') || cefr.includes('avancado') || cefr.includes('avançado')) set.add('#avancado');
            else if (cefr.includes('c2') || cefr.includes('fluente')) set.add('#fluente');
            else set.add('#intermediario');
            return Array.from(set).slice(0, 10);
        }

        async function pushRecordToCloud(record, streamPayload) {
            const fbUrl = DEFAULT_FIREBASE_URL.trim().replace(/\/+$/, '');
            const gasUrl = DEFAULT_GAS_WEBHOOK.trim();

            // 1. Extrai texto completo e aplica Moderação Anti-Ofensa + Classificação Automática de Tags
            const fullText = extractRecordTextForModeration(record);
            if (IUWE_FORBIDDEN_CONTENT_REGEX.test(fullText)) {
                archiveRecords = archiveRecords.filter(r => r.archiveId !== record.archiveId);
                saveLocalRecords();
                renderUnifiedFeed();
                showToast('🚫 Publicação bloqueada pelo Porteiro de Segurança: detectado conteúdo ofensivo, agressivo, preconceituoso ou misógino.', 'error');
                return { ok: false, blocked: true };
            }

            let autoTags = computeAutoClassifiedTags(record, fullText);

            // 2. Consulta o Porteiro Google Apps Script (Moderação Server-Side + Classificação Automática de Tags, SEM Google Drive)
            if (gasUrl) {
                try {
                    const shaHex = computeFastDeterministicHash64(record.archiveId + ':' + (record.timestampMs || Date.now()));
                    const cleanMetaForDoor = JSON.parse(JSON.stringify(record.publicationMetadata || {}));
                    if (cleanMetaForDoor.flashcardData) {
                        if (cleanMetaForDoor.flashcardData.front) delete cleanMetaForDoor.flashcardData.front.audioBase64;
                        if (cleanMetaForDoor.flashcardData.frontSide) delete cleanMetaForDoor.flashcardData.frontSide.audioBase64;
                        if (Array.isArray(cleanMetaForDoor.flashcardData.backTranslations)) {
                            cleanMetaForDoor.flashcardData.backTranslations.forEach(b => { delete b.audioBase64; });
                        }
                    }
                    if (Array.isArray(cleanMetaForDoor.slides)) {
                        cleanMetaForDoor.slides.forEach(s => {
                            delete s.imageDataUrl;
                            delete s.primaryAudioBase64;
                            delete s.secondaryAudioBase64;
                            delete s.tertiaryAudioBase64;
                        });
                    }
                    if (Array.isArray(cleanMetaForDoor.vocabItems)) {
                        cleanMetaForDoor.vocabItems.forEach(v => {
                            delete v.primaryAudioBase64;
                            delete v.secondaryAudioBase64;
                            delete v.tertiaryAudioBase64;
                        });
                    }
                    const slimRecordForDoorkeeper = {
                        archiveId: record.archiveId,
                        moduleType: record.moduleType,
                        status: record.status,
                        timestampMs: record.timestampMs,
                        createdAtIso: record.createdAtIso,
                        creatorMetadata: record.creatorMetadata || { handle: getActorHandle() },
                        publicationMetadata: cleanMetaForDoor
                    };
                    const doorPayload = {
                        action: 'moderate_and_classify_tags',
                        archiveId: record.archiveId,
                        publishedAtIso: record.createdAtIso || new Date().toISOString(),
                        contentHashSha256: shaHex,
                        record: slimRecordForDoorkeeper
                    };
                    const gasRes = await window.fetch(gasUrl, {
                        method: 'POST',
                        redirect: 'follow',
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        body: JSON.stringify(doorPayload)
                    });
                    if (gasRes && gasRes.ok) {
                        const doorJson = await gasRes.json();
                        if (doorJson && doorJson.approved === false) {
                            archiveRecords = archiveRecords.filter(r => r.archiveId !== record.archiveId);
                            saveLocalRecords();
                            renderUnifiedFeed();
                            showToast('🚫 Bloqueado pelo Porteiro Apps Script: ' + (doorJson.reason || doorJson.error || 'Conteúdo viola as diretrizes da comunidade.'), 'error');
                            return { ok: false, blocked: true };
                        }
                        if (doorJson && Array.isArray(doorJson.autoTags) && doorJson.autoTags.length > 0) {
                            autoTags = Array.from(new Set([...autoTags, ...doorJson.autoTags])).slice(0, 10);
                        }
                    }
                } catch (e) {}
            }

            // Atualiza as tags classificadas automaticamente no registro antes de gravar no Firebase
            if (!record.publicationMetadata) record.publicationMetadata = {};
            record.publicationMetadata.tags = autoTags;
            record.tags = autoTags;
            saveLocalRecords();
            renderUnifiedFeed();

            // 3. Salva 100% no Firebase RTDB (Zero Google Drive)
            if (fbUrl) {
                try {
                    if (!record.authorTokenHash && typeof getAuthorTokenHash === 'function') record.authorTokenHash = getAuthorTokenHash();
                    if (currentGmailAuthSession && currentGmailAuthSession.uid) record.authorAuthUid = currentGmailAuthSession.uid;
                    const metaCopy = JSON.parse(JSON.stringify(record));
                    delete metaCopy.compiledSlideHtml;
                    if (metaCopy.generatedWavBase64 && metaCopy.generatedWavBase64.length > 2500000) delete metaCopy.generatedWavBase64;
                    const u1 = fbUrl + '/audiocasts/' + encodeURIComponent(record.archiveId) + '.json';
                    await remoteCloudFetch(u1, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(metaCopy)
                    });
                    if (streamPayload) {
                        const u2 = fbUrl + '/audiocast_streams/' + encodeURIComponent(record.archiveId) + '.json';
                        await remoteCloudFetch(u2, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(streamPayload)
                        });
                    }
                } catch (e) {}
            }
            return { ok: true, autoTags };
        }

        // --- PUBLICAR OPÇÃO 1: AUDIOCAST ---
        window.postAndArchiveAudiocast = async function() {
            const audioOnly = cycleBlocks.filter(b => b.kind === 'audio');
            if (audioOnly.length === 0) {
                showToast('Adicione pelo menos 1 bloco de áudio (+ Áudio) antes de publicar!', 'error');
                return;
            }
            const { wavBlob, totalDurationSec, sampleRate } = stitchCycleToSingleWav();
            const wavDataUrl = await blobToDataUrl(wavBlob);
            const archiveId = 'ARC-AC-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
            const nowIso = new Date().toISOString();
            const handle = getActorHandle();
            const langTags = Array.from(new Set(audioOnly.map(b => '#' + b.langCode)));
            const tags = parseCustomPostTags('#audiocast', langTags);
            const title = audioOnly.map(b => b.spokenText).join(' • ').slice(0, 95);

            const rec = {
                archiveId,
                moduleType: 'audiocast',
                status: 'ACTIVE_PUBLIC',
                timestampMs: Date.now(),
                createdAtIso: nowIso,
                creatorMetadata: { handle, displayName: currentUserProfile.displayName },
                publicationMetadata: {
                    module: 'audiocast',
                    title,
                    cefrLevel: document.getElementById('global-post-level-select')?.value || 'Intermediário (B1-B2)',
                    tags,
                    totalDurationSec,
                    sampleRate,
                    blocks: cycleBlocks.map(b => ({
                        kind: b.kind,
                        spokenText: b.spokenText || '',
                        sourceText: b.sourceText || '',
                        langCode: b.langCode || '',
                        langLabel: b.langLabel || '',
                        voice: b.voice || '',
                        durationSec: b.durationSec || 0
                    }))
                },
                generatedWavBase64: wavDataUrl
            };

            streamMemoryCache[archiveId] = { archiveId, generatedWavBase64: wavDataUrl, updatedAtIso: nowIso };
            archiveRecords.unshift(rec);
            saveLocalRecords();
            appendLifecycleAuditEvent(archiveId, 'POST_CREATED_AUDIOCAST', `Audiocast publicado por ${handle}`, 'ACTIVE_PUBLIC');
            switchMainTab('public');
            showToast(`Audiocast publicado no Feed Cronológico (${archiveId})!`, 'success');
            await pushRecordToCloud(rec, streamMemoryCache[archiveId]);
        };

        // --- PUBLICAR OPÇÃO 2: FLASHCARD 3D ---
        window.postAndArchiveFlashcard = async function() {
            const fLang = document.getElementById('fc-front-lang')?.value || 'pt-BR';
            const fText = (document.getElementById('fc-front-text')?.value || '').trim();
            const fHint = (document.getElementById('fc-front-hint')?.value || '').trim();
            if (!fText) { showToast('Preencha a frase do Lado A do Flashcard!', 'error'); return; }

            const archiveId = 'ARC-FC-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
            const nowIso = new Date().toISOString();
            const handle = getActorHandle();
            const langTags = ['#' + fLang, ...backLanguageItems.map(b => '#' + b.langCode)];
            const tags = parseCustomPostTags('#flashcard', langTags);

            const cardStyle = (window.getStudioCardStyle ? window.getStudioCardStyle('flashcard') : { bgColor: '#1e1b4b', textColor: '#ffffff' });
            const flashcardData = {
                cardStyle,
                front: {
                    langCode: fLang,
                    langLabel: LANG_LABELS[fLang] || fLang,
                    text: fText,
                    contextHint: fHint,
                    hasAudio: draftFrontAudio.hasAudio,
                    audioBase64: draftFrontAudio.wavDataUrl || '',
                    durationSec: draftFrontAudio.durationSec || 0
                },
                backTranslations: backLanguageItems.map(b => ({
                    id: b.id,
                    langCode: b.langCode,
                    langLabel: LANG_LABELS[b.langCode] || b.langCode,
                    text: b.text,
                    phoneticOrNote: b.phoneticOrNote || '',
                    hasAudio: b.hasAudio,
                    audioBase64: b.wavDataUrl || '',
                    durationSec: b.durationSec || 0
                }))
            };

            const rec = {
                archiveId,
                moduleType: 'flashcard',
                status: 'ACTIVE_PUBLIC',
                timestampMs: Date.now(),
                createdAtIso: nowIso,
                creatorMetadata: { handle, displayName: currentUserProfile.displayName },
                publicationMetadata: {
                    module: 'flashcard',
                    title: fText,
                    cefrLevel: document.getElementById('global-post-level-select')?.value || 'Intermediário (B1-B2)',
                    tags,
                    flashcardData
                },
                generatedWavBase64: (await (async function() {
                    const st = stitchFlashcardMasterWav();
                    return st.hasAnyAudio ? (await blobToDataUrl(st.wavBlob)) : (draftFrontAudio.wavDataUrl || '');
                })())
            };
            rec.publicationMetadata.flashcardData.frontSide = rec.publicationMetadata.flashcardData.front;

            rec.compiledSlideHtml = buildCompiledFlashcardSlideHtml(rec);
            streamMemoryCache[archiveId] = {
                archiveId,
                compiledSlideHtml: rec.compiledSlideHtml,
                generatedWavBase64: rec.generatedWavBase64,
                flashcardData,
                updatedAtIso: nowIso
            };

            archiveRecords.unshift(rec);
            saveLocalRecords();
            appendLifecycleAuditEvent(archiveId, 'POST_CREATED_FLASHCARD', `Flashcard 3D publicado por ${handle}`, 'ACTIVE_PUBLIC');
            switchMainTab('public');
            showToast(`Flashcard 3D publicado no Feed Cronológico (${archiveId})!`, 'success');
            await pushRecordToCloud(rec, streamMemoryCache[archiveId]);
        };

        // --- PUBLICAR OPÇÃO 3: LIVRETO ILUSTRADO ---
        window.postAndArchiveBooklet = async function() {
            const bookTitle = (document.getElementById('bk-title-input')?.value || 'Livreto Ilustrado IUWE').trim();
// Geração em sequência desativada no envio para proteger a cota da API; publica os áudios gerados individualmente.
            const archiveId = 'ARC-BK-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
            const nowIso = new Date().toISOString();
            const handle = getActorHandle();
            const tags = parseCustomPostTags('#livreto', ['#fr-CA', '#en-CA']);

            const serializedSlides = [];
            for (let i = 0; i < bookletSlides.length; i++) {
                const s = bookletSlides[i];
                const compactImg = await compressImageDataUrl(s.imageDataUrl || createContextualSceneDataUrl(s.imagePrompt || bookTitle, i));
                serializedSlides.push({
                    slideNumber: i + 1,
                    voice: s.voice || 'Zephyr',
                    speed: s.speed || '1.0',
                    imagePrompt: s.imagePrompt || '',
                    imageDataUrl: compactImg,
                    primaryLang: s.primaryLang,
                    primaryLangLabel: LANG_LABELS[s.primaryLang] || s.primaryLang,
                    primaryText: s.primaryText,
                    hidePrimaryText: Boolean(s.hidePrimaryText),
                    primaryHasAudio: Boolean(s.primaryHasAudio),
                    primaryAudioBase64: s.primaryWavDataUrl || '',
                    enableSecondary: s.enableSecondary !== false,
                    secondaryLang: s.secondaryLang,
                    secondaryLangLabel: LANG_LABELS[s.secondaryLang] || s.secondaryLang,
                    secondaryText: s.secondaryText,
                    hideSecondaryText: Boolean(s.hideSecondaryText),
                    secondaryHasAudio: Boolean(s.secondaryHasAudio),
                    secondaryAudioBase64: s.secondaryWavDataUrl || '',
                    enableTertiary: Boolean(s.enableTertiary),
                    tertiaryLang: s.tertiaryLang,
                    tertiaryLangLabel: LANG_LABELS[s.tertiaryLang] || s.tertiaryLang,
                    tertiaryText: s.tertiaryText,
                    hideTertiaryText: Boolean(s.hideTertiaryText),
                    tertiaryHasAudio: Boolean(s.tertiaryHasAudio),
                    tertiaryAudioBase64: s.tertiaryWavDataUrl || ''
                });
            }

            const bkCardStyle = window.getStudioCardStyle ? window.getStudioCardStyle('livreto') : { bgColor: '#1e1b4b', textColor: '#ffffff' };
            const compiledHtml = buildCompiledBookletStudyHtml(bookTitle, archiveId, handle, serializedSlides, bkCardStyle);
            const rec = {
                archiveId,
                moduleType: 'livreto',
                status: 'ACTIVE_PUBLIC',
                timestampMs: Date.now(),
                createdAtIso: nowIso,
                creatorMetadata: { handle, displayName: currentUserProfile.displayName },
                publicationMetadata: {
                    module: 'livreto',
                    cardStyle: (window.getStudioCardStyle ? window.getStudioCardStyle('livreto') : { bgColor: '#1e1b4b', textColor: '#ffffff' }),
                    bookTitle,
                    cefrLevel: document.getElementById('global-post-level-select')?.value || 'Intermediário (B1-B2)',
                    title: bookTitle,
                    tags,
                    slideCount: serializedSlides.length,
                    slides: serializedSlides
                },
                slides: serializedSlides,
                compiledSlideHtml: compiledHtml
            };

            streamMemoryCache[archiveId] = {
                archiveId,
                compiledSlideHtml: compiledHtml,
                slides: serializedSlides,
                updatedAtIso: nowIso
            };

            archiveRecords.unshift(rec);
            saveLocalRecords();
            appendLifecycleAuditEvent(archiveId, 'POST_CREATED_BOOKLET', `Livreto "${bookTitle}" publicado por ${handle}`, 'ACTIVE_PUBLIC');
            switchMainTab('public');
            showToast(`Livreto Ilustrado publicado no Feed Cronológico (${archiveId})!`, 'success');
            await pushRecordToCloud(rec, streamMemoryCache[archiveId]);
        };

        // --- PUBLICAR OPÇÃO 4: VOCABULÁRIO IA ---
        window.postAndArchiveVocabulary = async function() {
            const themeTitle = (document.getElementById('vc-theme-input')?.value || 'Caderno de Vocabulário IA').trim();
            const level = document.getElementById('vc-level-select')?.value || 'Intermediário (B1-B2)';
// Geração em sequência desativada no envio para proteger a cota da API; publica os áudios gerados individualmente.
            const archiveId = 'ARC-VC-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
            const nowIso = new Date().toISOString();
            const handle = getActorHandle();
            const tags = parseCustomPostTags('#vocabulario_ia', ['#en-CA', '#fr-CA']);

            const serializedItems = vocabItems.map((it, idx) => ({
                itemNumber: idx + 1,
                usageNote: it.usageNote || it.categoryTag || 'Expressão Contextual',
                categoryTag: it.usageNote || it.categoryTag || 'Expressão Contextual',
                voice: it.voice || 'Zephyr',
                speed: it.speed || '1.0',
                primaryLang: it.primaryLang,
                primaryLangLabel: LANG_LABELS[it.primaryLang] || it.primaryLang,
                primaryTerm: it.primaryTerm,
                primarySentence: it.primarySentence,
                hidePrimaryText: it.hidePrimaryText !== false,
                removePrimaryDictation: Boolean(it.removePrimaryDictation),
                primaryHasAudio: Boolean(it.primaryHasAudio && it.primaryWavDataUrl),
                primaryDurationSec: it.primaryDurationSec || 0,
                primaryAudioBase64: it.primaryWavDataUrl || '',
                enableSecondary: it.enableSecondary !== false,
                secondaryLang: it.secondaryLang,
                secondaryLangLabel: LANG_LABELS[it.secondaryLang] || it.secondaryLang,
                secondaryTerm: it.secondaryTerm,
                secondarySentence: it.secondarySentence,
                hideSecondaryText: it.hideSecondaryText !== false,
                removeSecondaryDictation: Boolean(it.removeSecondaryDictation),
                secondaryHasAudio: Boolean(it.secondaryHasAudio && it.secondaryWavDataUrl),
                secondaryDurationSec: it.secondaryDurationSec || 0,
                secondaryAudioBase64: it.secondaryWavDataUrl || '',
                enableTertiary: Boolean(it.enableTertiary),
                tertiaryLang: it.tertiaryLang,
                tertiaryLangLabel: LANG_LABELS[it.tertiaryLang] || it.tertiaryLang,
                tertiaryTerm: it.tertiaryTerm,
                tertiarySentence: it.tertiarySentence,
                hideTertiaryText: it.hideTertiaryText !== false,
                removeTertiaryDictation: Boolean(it.removeTertiaryDictation),
                tertiaryHasAudio: Boolean(it.tertiaryHasAudio && it.tertiaryWavDataUrl),
                tertiaryDurationSec: it.tertiaryDurationSec || 0,
                tertiaryAudioBase64: it.tertiaryWavDataUrl || ''
            }));

            const vcCardStyle = window.getStudioCardStyle ? window.getStudioCardStyle('vocabulario') : { bgColor: '#134e4a', textColor: '#ffffff' };
            const compiledHtml = buildCompiledVocabStudyHtml(themeTitle, archiveId, handle, serializedItems, vcCardStyle);
            const rec = {
                archiveId,
                moduleType: 'vocabulario_ia',
                status: 'ACTIVE_PUBLIC',
                timestampMs: Date.now(),
                createdAtIso: nowIso,
                creatorMetadata: { handle, displayName: currentUserProfile.displayName },
                publicationMetadata: {
                    module: 'vocabulario_ia',
                    cardStyle: (window.getStudioCardStyle ? window.getStudioCardStyle('vocabulario') : { bgColor: '#134e4a', textColor: '#ffffff' }),
                    themeTitle,
                    title: themeTitle,
                    cefrLevel: level,
                    tags,
                    itemCount: serializedItems.length,
                    vocabItems: serializedItems
                },
                vocabItems: serializedItems,
                compiledSlideHtml: compiledHtml
            };

            streamMemoryCache[archiveId] = {
                archiveId,
                compiledSlideHtml: compiledHtml,
                vocabItems: serializedItems,
                updatedAtIso: nowIso
            };

            archiveRecords.unshift(rec);
            saveLocalRecords();
            appendLifecycleAuditEvent(archiveId, 'POST_CREATED_VOCAB', `Vocabulário IA "${themeTitle}" publicado por ${handle}`, 'ACTIVE_PUBLIC');
            switchMainTab('public');
            showToast(`Caderno de Vocabulário IA publicado no Feed (${archiveId})!`, 'success');
            await pushRecordToCloud(rec, streamMemoryCache[archiveId]);
        };


        // ============================================================================
        // 7. SEED DEMO MULTIMODAL (4 FORMATOS EM ORDEM CRONOLÓGICA) + SYNC NUVEM
        // ============================================================================
        function ensureDemoSeedPostsIfEmpty() {
            if (archiveRecords && archiveRecords.some(r => !isRecordArchivedLgpd(r))) return;
            const myId = getActorHandle();
            archiveRecords = [
                {
                    archiveId: 'ARC-FC-DEMO2026',
                    moduleType: 'flashcard',
                    status: 'ACTIVE_PUBLIC',
                    timestampMs: Date.now() - 60000,
                    viewsCount: 0,
                    downloadsCount: 0,
                    viewedByUsers: {},
                    downloadedByUsers: {},
                    creatorMetadata: { handle: myId, displayName: 'ID ' + myId },
                    publicationMetadata: {
                        module: 'flashcard',
                        title: 'Expressões Essenciais de Imigração & Trabalho (EN / FR / PT)',
                        cefrLevel: 'Intermediário (B1-B2)',
                        languages: ['en-CA', 'fr-CA', 'pt-BR'],
                        tags: ['#canada', '#bilingue', '#trabalho'],
                        flashcardData: {
                            front: {
                                langCode: 'en-CA',
                                langLabel: '🇨🇦 Inglês Canadense',
                                text: 'Could we schedule a quick follow-up meeting to review the project milestones?',
                                contextHint: 'Ambiente profissional no Canadá • Estúdio aberto com prática trilíngue (Inglês Canadense, Francês Québécois e Português) e salvamento na nuvem com Google!'
                            },
                            backTranslations: [
                                {
                                    langCode: 'fr-CA',
                                    langLabel: '🇨🇦 Francês Québécois',
                                    text: 'Pourrions-nous planifier une brève rencontre de suivi pour réviser les étapes du projet ?'
                                },
                                {
                                    langCode: 'pt-BR',
                                    langLabel: '🇧🇷 Português (BR)',
                                    text: 'Poderíamos agendar uma rápida reunião de acompanhamento para revisar as etapas do projeto?'
                                }
                            ]
                        }
                    }
                }
            ];
            saveLocalRecords();
        }

        window.refreshFeedFromCloudDb = async function(silent = false) {
            const fbUrl = DEFAULT_FIREBASE_URL.trim().replace(/\/+$/, '');
            const icon = document.getElementById('refresh-feed-icon');
            if (icon) icon.classList.add('animate-spin');
            try {
                if (fbUrl) {
                    try {
                        const mRes = await remoteCloudFetch(fbUrl + '/creator_metrics_v2.json');
                        if (mRes.ok) {
                            const mData = await mRes.json();
                            if (mData && typeof mData === 'object') {
                                if (mData.followers) {
                                    Object.values(mData.followers).forEach(fObj => {
                                        if (fObj && fObj.creatorId) {
                                            creatorMetricsStore.followersByHandle[fObj.creatorId] = Math.max(
                                                Number(creatorMetricsStore.followersByHandle[fObj.creatorId] || 0),
                                                Number(fObj.followersCount || 0)
                                            );
                                        }
                                    });
                                }
                                if (mData.downloads) {
                                    Object.values(mData.downloads).forEach(dObj => {
                                        if (dObj && dObj.archiveId) {
                                            if (Array.isArray(dObj.uniqueDownloaders)) {
                                                const mergedSet = new Set([...(creatorMetricsStore.uniqueDownloadersByPostId[dObj.archiveId] || []), ...dObj.uniqueDownloaders]);
                                                creatorMetricsStore.uniqueDownloadersByPostId[dObj.archiveId] = Array.from(mergedSet);
                                                creatorMetricsStore.downloadsByPostId[dObj.archiveId] = mergedSet.size;
                                            }
                                        }
                                    });
                                }
                                if (mData.views) {
                                    Object.values(mData.views).forEach(vObj => {
                                        if (vObj && vObj.archiveId) {
                                            if (Array.isArray(vObj.uniqueViewers)) {
                                                const mergedSet = new Set([...(creatorMetricsStore.uniqueViewersByPostId[vObj.archiveId] || []), ...vObj.uniqueViewers]);
                                                creatorMetricsStore.uniqueViewersByPostId[vObj.archiveId] = Array.from(mergedSet);
                                                creatorMetricsStore.viewsByPostId[vObj.archiveId] = mergedSet.size;
                                            }
                                        }
                                    });
                                }
                                saveCreatorMetricsStore();
                            }
                        }
                    } catch (e) {}
                    const u = fbUrl + '/audiocasts.json';
                    const res = await remoteCloudFetch(u);
                    if (res.ok) {
                        const data = await res.json();
                        if (data && typeof data === 'object') {
                            const map = new Map();
                            archiveRecords.forEach(r => { if (r && r.archiveId) map.set(r.archiveId, r); });
                            Object.values(data).forEach(cloudRec => {
                                if (!cloudRec || !cloudRec.archiveId) return;
                                const local = map.get(cloudRec.archiveId) || {};
                                const merged = Object.assign({}, local, cloudRec);
                                merged.moduleType = detectRecordModuleType(merged);
                                const creator = getCreatorHandleFromRecord(merged);
                                ensureContactInDirectory(creator, {
                                    name: getCreatorNameFromRecord(merged),
                                    tags: getTagsFromRecord(merged)
                                });
                                map.set(cloudRec.archiveId, merged);
                            });
                            archiveRecords = Array.from(map.values()).sort((a, b) => (b.timestampMs || 0) - (a.timestampMs || 0));
                            saveLocalRecords();
                        }
                    }
                }
                ensureDemoSeedPostsIfEmpty();
                renderUnifiedFeed();
                if (!silent) showToast(`Feed cronológico atualizado (${archiveRecords.length} posts das 4 ferramentas)!`, 'success');
            } catch (e) {
                renderUnifiedFeed();
                if (!silent) showToast('Exibindo posts sincronizados na memória local.', 'info');
            } finally {
                if (icon) icon.classList.remove('animate-spin');
            }
        };

        async function hydrateStreamForRecord(archiveId) {
            if (streamMemoryCache[archiveId]) return streamMemoryCache[archiveId];
            const fbUrl = DEFAULT_FIREBASE_URL.trim().replace(/\/+$/, '');
            if (!fbUrl) return null;
            try {
                const u = fbUrl + '/audiocast_streams/' + encodeURIComponent(archiveId) + '.json';
                const r = await remoteCloudFetch(u);
                if (!r.ok) return null;
                const payload = await r.json();
                if (!payload) return null;
                streamMemoryCache[archiveId] = payload;
                const rec = archiveRecords.find(x => x.archiveId === archiveId);
                if (rec) {
                    if (payload.compiledSlideHtml) rec.compiledSlideHtml = payload.compiledSlideHtml;
                    if (payload.generatedWavBase64) rec.generatedWavBase64 = payload.generatedWavBase64;
                    if (Array.isArray(payload.slides) && payload.slides.length) {
                        rec.slides = payload.slides;
                        if (rec.publicationMetadata) rec.publicationMetadata.slides = payload.slides;
                    }
                    if (payload.flashcardData && rec.publicationMetadata) {
                        rec.publicationMetadata.flashcardData = payload.flashcardData;
                    }
                    if (Array.isArray(payload.vocabItems) && payload.vocabItems.length) {
                        rec.vocabItems = payload.vocabItems;
                        if (rec.publicationMetadata) rec.publicationMetadata.vocabItems = payload.vocabItems;
                    }
                }
                return payload;
            } catch (e) { return null; }
        }

        // ============================================================================
        // 8. RENDERIZAÇÃO DO FEED UNIFICADO CRONOLÓGICO (PÚBLICO E PESSOAL)
        // ============================================================================
        window.toggleShowArchivedRecords = function() {
            showArchivedRecordsInPersonal = !showArchivedRecordsInPersonal;
            const lbl = document.getElementById('toggle-archived-label');
            const btn = document.getElementById('btn-toggle-archived-lgpd');
            if (lbl) lbl.textContent = showArchivedRecordsInPersonal ? 'Ocultar Lixeira (30 Dias)' : 'Ver Lixeira (30 Dias)';
            if (btn) {
                btn.classList.toggle('iuwe-selected-blue', showArchivedRecordsInPersonal);
            }
            renderUnifiedFeed();
        };

        function speakOrPlayDataUrl(dataUrl, fallbackText, fallbackLang) {
            if (dataUrl && dataUrl.startsWith('data:audio')) {
                playAudioUrl(dataUrl);
                return;
            }
            if ('speechSynthesis' in window && fallbackText) {
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(fallbackText);
                u.lang = fallbackLang || 'fr-CA';
                window.speechSynthesis.speak(u);
            } else {
                showToast('Áudio pronto para reprodução!', 'info');
            }
        }

        window.playFeedAudiocastItem = async function(archiveId) {
            registerPostRenderedOrExecutedView(archiveId, true);
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            if (!rec) return;
            if (!rec.generatedWavBase64) await hydrateStreamForRecord(archiveId);
            const blocks = rec.publicationMetadata?.blocks || [];
            const firstAudio = blocks.find(b => b.kind === 'audio') || {};
            speakOrPlayDataUrl(rec.generatedWavBase64, firstAudio.spokenText || rec.publicationMetadata?.title || '', firstAudio.langCode || 'fr-CA');
        };

        window.playFeedFlashcardSide = async function(archiveId, side, idx = 0) {
            registerPostRenderedOrExecutedView(archiveId, true);
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            if (!rec) return;
            await hydrateStreamForRecord(archiveId);
            const fc = rec.publicationMetadata?.flashcardData || {};
            if (side === 'front') {
                const f = fc.front || {};
                speakOrPlayDataUrl(f.audioBase64 || rec.generatedWavBase64, f.text || '', f.langCode || 'pt-BR');
            } else {
                const b = (fc.backTranslations || [])[idx] || {};
                speakOrPlayDataUrl(b.audioBase64, b.text || '', b.langCode || 'en-CA');
            }
        };

        window.changeFeedBookletSlide = async function(archiveId, delta) {
            registerPostRenderedOrExecutedView(archiveId, true);
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            if (!rec) return;
            await hydrateStreamForRecord(archiveId);
            const slides = rec.publicationMetadata?.slides || rec.slides || [];
            if (!slides.length) return;
            const cur = feedSlideIndexMap[archiveId] || 0;
            feedSlideIndexMap[archiveId] = (cur + delta + slides.length) % slides.length;
            renderUnifiedFeed();
        };

        window.playFeedBookletTier = async function(archiveId, slideIdx, tier) {
            registerPostRenderedOrExecutedView(archiveId, true);
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            if (!rec) return;
            await hydrateStreamForRecord(archiveId);
            const slides = rec.publicationMetadata?.slides || rec.slides || [];
            const s = slides[slideIdx];
            if (!s) return;
            if (tier === 'primary') speakOrPlayDataUrl(s.primaryAudioBase64, s.primaryText, s.primaryLang);
            if (tier === 'secondary') speakOrPlayDataUrl(s.secondaryAudioBase64, s.secondaryText, s.secondaryLang);
            if (tier === 'tertiary') speakOrPlayDataUrl(s.tertiaryAudioBase64, s.tertiaryText, s.tertiaryLang);
        };

        window.changeFeedVocabItem = async function(archiveId, delta) {
            registerPostRenderedOrExecutedView(archiveId, true);
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            if (!rec) return;
            await hydrateStreamForRecord(archiveId);
            const items = rec.publicationMetadata?.vocabItems || rec.vocabItems || [];
            if (!items.length) return;
            const cur = feedVocabIndexMap[archiveId] || 0;
            feedVocabIndexMap[archiveId] = (cur + delta + items.length) % items.length;
            renderUnifiedFeed();
        };

        window.playFeedVocabTier = async function(archiveId, itemIdx, tier) {
            registerPostRenderedOrExecutedView(archiveId, true);
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            if (!rec) return;
            await hydrateStreamForRecord(archiveId);
            const items = rec.publicationMetadata?.vocabItems || rec.vocabItems || [];
            const it = items[itemIdx];
            if (!it) return;
            if (tier === 'primary') speakOrPlayDataUrl(it.primaryAudioBase64, `${it.primaryTerm}. ${it.primarySentence}`, it.primaryLang);
            if (tier === 'secondary') speakOrPlayDataUrl(it.secondaryAudioBase64, `${it.secondaryTerm}. ${it.secondarySentence}`, it.secondaryLang);
            if (tier === 'tertiary') speakOrPlayDataUrl(it.tertiaryAudioBase64, `${it.tertiaryTerm}. ${it.tertiarySentence}`, it.tertiaryLang);
        };

        function buildFeedCardInnerBody(rec, modType) {
            const id = rec.archiveId;
            const meta = rec.publicationMetadata || {};

            if (modType === 'audiocast') {
                const blocks = Array.isArray(meta.blocks) ? meta.blocks : [];
                const blocksHtml = blocks.filter(b => b.kind === 'audio').map((b, i) => `
                    <div class="bg-white border border-iuwe-purpleBorder rounded-xl p-2.5 flex items-center justify-between gap-2 text-xs">
                        <div>
                            <span class="text-[10px] font-extrabold text-iuwe-blue uppercase">${escapeHtml(translateLangLabel(b.langCode, b.langLabel))} • ${escapeHtml(b.voice || 'Zephyr')}</span>
                            <p class="font-bold text-slate-800 mt-0.5">"${escapeHtml(b.spokenText || '')}"</p>
                        </div>
                    </div>
                `).join('');
                return `
                    <div class="bg-iuwe-purple/35 border border-iuwe-purpleBorder rounded-xl p-3 space-y-2">
                        ${blocksHtml || `<p class="text-xs font-bold text-slate-800">${escapeHtml(meta.title || 'Audiocast 24kHz')}</p>`}
                        <div class="flex items-center justify-between gap-2 pt-1">
                            <button type="button" onclick="playFeedAudiocastItem('${escapeHtml(id)}')" class="px-3.5 py-1.5 rounded-xl bg-iuwe-blue hover:bg-iuwe-sky text-white font-extrabold text-xs flex items-center gap-1.5 shadow-2xs">
                                <i class="fa-solid fa-play"></i> ${uiT('listenAudiocast')} (${meta.totalDurationSec || 4.5}s)
                            </button>
                            <span class="text-[10px] font-mono text-iuwe-blue font-bold">${uiT('pcmCleanAudio')}</span>
                        </div>
                    </div>
                `;
            }

            if (modType === 'flashcard') {
                const fc = meta.flashcardData || {};
                const cs = fc.cardStyle || meta.cardStyle || null;
                const faceInlineStyle = (cs && cs.bgColor && cs.textColor)
                    ? `style="background: ${escapeHtml(cs.bgColor)} !important; color: ${escapeHtml(cs.textColor)} !important;"`
                    : '';
                const textInlineStyle = (cs && cs.textColor)
                    ? `style="color: ${escapeHtml(cs.textColor)} !important;"`
                    : '';
                const front = fc.front || { langLabel: '🇧🇷 Português', text: meta.title || '' };
                const backs = Array.isArray(fc.backTranslations) ? fc.backTranslations : [];
                return `
                    <div class="space-y-2">
                        <div class="flashcard-perspective">
                            <div id="fc-feed-3d-${escapeHtml(id)}" class="flashcard-inner cursor-pointer" onclick="flipFeedFlashcard3D('${escapeHtml(id)}', this)">
                                <div class="flashcard-face flashcard-front p-3.5 flex flex-col justify-between" ${faceInlineStyle}>
                                    <div class="space-y-1.5">
                                        <div class="flex items-center justify-between">
                                            <span class="px-2 py-0.5 rounded-md bg-purple-500 text-white font-extrabold text-[10px]">${uiT('sideA')} • ${escapeHtml(translateLangLabel(front.langCode, front.langLabel))}</span>
                                            <button type="button" onclick="event.stopPropagation(); playFeedFlashcardSide('${escapeHtml(id)}', 'front', 0)" class="px-2.5 py-1 rounded-lg bg-iuwe-purple hover:bg-iuwe-purpleMid text-iuwe-blue font-extrabold text-[10.5px]">🔊 ${uiT('listenBtn')}</button>
                                        </div>
                                        <p class="text-sm font-extrabold text-slate-800 leading-snug pt-1" ${textInlineStyle}>${escapeHtml(front.text || '')}</p>
                                        ${front.contextHint ? `<p class="text-[10.5px] text-purple-700 font-semibold" ${textInlineStyle}>💡 ${escapeHtml(translatePostMetaText(front.contextHint))}</p>` : ''}
                                    </div>
                                    <div class="text-[10px] font-extrabold text-iuwe-blue text-right pt-2">${uiT('flipToSideB')}</div>
                                </div>
                                <div class="flashcard-face flashcard-back p-3.5 flex flex-col justify-between" ${faceInlineStyle}>
                                    <div class="space-y-1.5">
                                        <span class="px-2 py-0.5 rounded-md bg-iuwe-blue text-white font-extrabold text-[10px]">${uiT('sideBTranslations')}</span>
                                        <div class="space-y-1.5 pt-1">
                                            ${backs.map((b, bi) => `
                                                <div class="bg-white/90 border border-purple-300 rounded-xl p-2 flex items-center justify-between gap-2 text-xs">
                                                    <div>
                                                        <span class="text-[10px] font-extrabold text-purple-500">${escapeHtml(translateLangLabel(b.langCode, b.langLabel))}</span>
                                                        <p class="font-bold text-slate-800">${escapeHtml(b.text || '')}</p>
                                                    </div>
                                                    <button type="button" onclick="event.stopPropagation(); playFeedFlashcardSide('${escapeHtml(id)}', 'back', ${bi})" class="px-2 py-1 rounded-lg bg-iuwe-blue text-white font-extrabold text-[10px] shrink-0">🔊</button>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                    <div class="text-[10px] font-extrabold text-purple-500 text-right pt-1">${uiT('flipToSideA')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            if (modType === 'livreto') {
                const slides = Array.isArray(meta.slides) && meta.slides.length ? meta.slides : (rec.slides || []);
                const idx = Math.min(feedSlideIndexMap[id] || 0, Math.max(0, slides.length - 1));
                const s = slides[idx] || {};
                const cs = meta.cardStyle || null;
                const stageStyle = (cs && cs.bgColor && cs.textColor)
                    ? `style="background: ${escapeHtml(cs.bgColor)} !important; color: ${escapeHtml(cs.textColor)} !important;"`
                    : '';
                const imgUrl = s.imageDataUrl || createContextualSceneDataUrl(s.imagePrompt || meta.bookTitle || 'Cena', idx);
                return `
                    <div class="slide-book-stage rounded-2xl p-3.5 text-white space-y-2.5" ${stageStyle}>
                        <div class="flex items-center justify-between gap-2 flex-wrap">
                            <span class="px-2.5 py-0.5 rounded-lg bg-amber-400 text-white font-extrabold text-[10.5px]">${uiT('pageWord')} ${idx + 1} ${uiT('ofWord')} ${slides.length || 1}</span>
                            <div class="flex items-center gap-1.5">
                                <button type="button" onclick="changeFeedBookletSlide('${escapeHtml(id)}', -1)" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-extrabold text-[10.5px]">◀ ${uiT('prevBtn')}</button>
                                <button type="button" onclick="changeFeedBookletSlide('${escapeHtml(id)}', 1)" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-extrabold text-[10.5px]">${uiT('nextBtn')} ▶</button>
                            </div>
                        </div>
                        <div class="rounded-xl overflow-hidden border border-white/15 bg-slate-950/60 flex justify-center">
                            <img src="${imgUrl}" alt="Slide" class="w-full max-h-48 object-cover">
                        </div>
                        <div class="space-y-1.5 text-xs">
                            <div class="bg-white/10 border border-white/20 rounded-xl p-2.5 flex items-center justify-between gap-2">
                                <div>
                                    <span class="text-[10px] font-extrabold text-amber-300">${escapeHtml(translateLangLabel(s.primaryLang, s.primaryLangLabel))}</span>
                                    <p class="font-bold text-white mt-0.5">${escapeHtml(s.primaryText || '')}</p>
                                </div>
                                <button type="button" onclick="playFeedBookletTier('${escapeHtml(id)}', ${idx}, 'primary')" class="px-2.5 py-1 rounded-lg bg-amber-400 text-white font-extrabold text-[10.5px] shrink-0">🔊 ${uiT('listenBtn')}</button>
                            </div>
                            ${s.enableSecondary !== false && s.secondaryText ? `
                            <div class="bg-white/10 border border-white/15 rounded-xl p-2 flex items-center justify-between gap-2">
                                <div>
                                    <span class="text-[10px] font-extrabold text-teal-300">${escapeHtml(translateLangLabel(s.secondaryLang, s.secondaryLangLabel))}</span>
                                    <p class="font-semibold text-slate-100 mt-0.5">${escapeHtml(s.secondaryText)}</p>
                                </div>
                                <button type="button" onclick="playFeedBookletTier('${escapeHtml(id)}', ${idx}, 'secondary')" class="px-2 py-1 rounded-lg bg-teal-400 text-white font-extrabold text-[10px] shrink-0">🔊</button>
                            </div>` : ''}
                            ${s.enableTertiary && s.tertiaryText ? `
                            <div class="bg-white/10 border border-white/15 rounded-xl p-2 flex items-center justify-between gap-2">
                                <div>
                                    <span class="text-[10px] font-extrabold text-purple-300">${escapeHtml(translateLangLabel(s.tertiaryLang, s.tertiaryLangLabel))}</span>
                                    <p class="font-semibold text-slate-100 mt-0.5">${escapeHtml(s.tertiaryText)}</p>
                                </div>
                                <button type="button" onclick="playFeedBookletTier('${escapeHtml(id)}', ${idx}, 'tertiary')" class="px-2 py-1 rounded-lg bg-purple-300 text-white font-extrabold text-[10px] shrink-0">🔊</button>
                            </div>` : ''}
                        </div>
                    </div>
                `;
            }

            // Vocabulário IA
            const items = Array.isArray(meta.vocabItems) && meta.vocabItems.length ? meta.vocabItems : (rec.vocabItems || []);
            const vIdx = Math.min(feedVocabIndexMap[id] || 0, Math.max(0, items.length - 1));
            const it = items[vIdx] || {};
            const cs = meta.cardStyle || null;
            const stageStyle = (cs && cs.bgColor && cs.textColor)
                ? `style="background: ${escapeHtml(cs.bgColor)} !important; color: ${escapeHtml(cs.textColor)} !important;"`
                : '';
            return `
                <div class="vocab-stage rounded-2xl p-3.5 text-white space-y-2.5" ${stageStyle}>
                    <div class="flex items-center justify-between gap-2 flex-wrap">
                        <div class="flex items-center gap-1.5">
                            <span class="px-2.5 py-0.5 rounded-lg bg-emerald-400 text-white font-extrabold text-[10.5px]">${uiT('termWord')} ${vIdx + 1} ${uiT('ofWord')} ${items.length || 1}</span>
                            <span class="px-2 py-0.5 rounded-lg bg-white/15 text-teal-200 font-extrabold text-[10px]">${escapeHtml(translateCefrLevel(meta.cefrLevel || 'Intermediário (B1-B2)'))} • ${escapeHtml(it.categoryTag || 'Context')}</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <button type="button" onclick="changeFeedVocabItem('${escapeHtml(id)}', -1)" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-extrabold text-[10.5px]">◀ ${uiT('prevBtn')}</button>
                            <button type="button" onclick="changeFeedVocabItem('${escapeHtml(id)}', 1)" class="px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white font-extrabold text-[10.5px]">${uiT('nextBtn')} ▶</button>
                        </div>
                    </div>
                    <div class="bg-white/10 border border-white/20 rounded-xl p-2.5 flex items-center justify-between gap-2 text-xs">
                        <div>
                            <span class="text-[10px] font-extrabold text-sky-200">${escapeHtml(translateLangLabel(it.primaryLang, it.primaryLangLabel))}</span>
                            <div class="text-sm font-extrabold text-white mt-0.5">${escapeHtml(it.primaryTerm || '')}</div>
                            <p class="text-xs text-slate-100 mt-0.5">"${escapeHtml(it.primarySentence || '')}"</p>
                        </div>
                        <button type="button" onclick="playFeedVocabTier('${escapeHtml(id)}', ${vIdx}, 'primary')" class="px-2.5 py-1.5 rounded-lg bg-emerald-400 text-white font-extrabold text-[10.5px] shrink-0">🔊 ${uiT('listenBtn')}</button>
                    </div>
                    ${it.enableSecondary !== false && it.secondaryTerm ? `
                    <div class="bg-white/10 border border-white/15 rounded-xl p-2 flex items-center justify-between gap-2 text-xs">
                        <div>
                            <span class="text-[10px] font-extrabold text-amber-300">${escapeHtml(translateLangLabel(it.secondaryLang, it.secondaryLangLabel))}</span>
                            <div class="font-bold text-white">${escapeHtml(it.secondaryTerm)} — <span class="font-normal text-slate-200">${escapeHtml(it.secondarySentence || '')}</span></div>
                        </div>
                        <button type="button" onclick="playFeedVocabTier('${escapeHtml(id)}', ${vIdx}, 'secondary')" class="px-2 py-1 rounded-lg bg-amber-400 text-white font-extrabold text-[10px] shrink-0">🔊</button>
                    </div>` : ''}
                    ${it.enableTertiary && it.tertiaryTerm ? `
                    <div class="bg-white/10 border border-white/15 rounded-xl p-2 flex items-center justify-between gap-2 text-xs">
                        <div>
                            <span class="text-[10px] font-extrabold text-purple-300">${escapeHtml(translateLangLabel(it.tertiaryLang, it.tertiaryLangLabel))}</span>
                            <div class="font-bold text-white">${escapeHtml(it.tertiaryTerm)} — <span class="font-normal text-slate-200">${escapeHtml(it.tertiarySentence || '')}</span></div>
                        </div>
                        <button type="button" onclick="playFeedVocabTier('${escapeHtml(id)}', ${vIdx}, 'tertiary')" class="px-2 py-1 rounded-lg bg-purple-300 text-white font-extrabold text-[10px] shrink-0">🔊</button>
                    </div>` : ''}
                </div>
            `;
        }

        const TRASH_RETENTION_MS = 30 * 24 * 60 * 60 * 1000;
        function appendLifecycleAudit(eventType, archiveId, summary) { if (typeof appendLifecycleAuditEvent === 'function') appendLifecycleAuditEvent(archiveId, eventType, summary, 'TRASH_LGPD'); }
        function isRecordArchivedLgpd(rec) {
            return rec && (rec.status === 'ARCHIVED_LGPD' || rec.status === 'ARCHIVED_LGPD_LEGACY');
        }

        function isRecordExpiredInUserTrash(rec) {
            if (!isRecordArchivedLgpd(rec)) return false;
            const archivedTs = Number(rec.archivedAtMs || rec.timestampMs || 0);
            if (!archivedTs) return false;
            return (Date.now() - archivedTs) > TRASH_RETENTION_MS;
        }

        function getTrashRemainingDays(rec) {
            const archivedTs = Number(rec.archivedAtMs || rec.timestampMs || Date.now());
            const remainingMs = TRASH_RETENTION_MS - (Date.now() - archivedTs);
            return Math.max(0, Math.ceil(remainingMs / (24 * 60 * 60 * 1000)));
        }

        
        // ============================================================================
        // ============================================================================
        // INTERFACE 100% EM PORTUGUÊS (PT-BR) — SELETOR E DICIONÁRIOS ESTRANGEIROS REMOVIDOS
        // ============================================================================
        const currentUiLang = 'pt';

        const IUWE_PTBR_STRINGS = {
            syncCloud: 'Atualizar Nuvem',
            menuProfileTags: 'Perfil & #Tags',
            menuAbout: 'Sobre a IUWE',
            menuUnGoals: 'Metas da ONU (ODS 4, 8, 9, 10)',
            menuGuide: 'Guia de Uso & Segurança',
            tabPublic: 'Público',
            tabPersonal: 'Pessoal',
            tabCreate: 'Criar',
            tabSaved: 'Salvos',
            audioFreeActive: 'Áudio: Modo Free Ativo',
            audioGeminiActive: 'Áudio: Gemini 24kHz',
            apiKeyBtn: 'Chave API',
            feedPublicHeading: 'Feed Público • Comunidade & Autores/#Tags que Sigo',
            feedPublicSub: 'Carrega todas as 4 ferramentas (<b>Audiocast</b>, <b>Flashcard 3D</b>, <b>Livreto Ilustrado</b> e <b>Vocabulário IA</b>). Siga <b>#tags</b> ou <b>IDs de criadores</b> direto nos cards!',
            feedPersonalHeading: 'Feed Pessoal • Meus Posts Publicados',
            feedPersonalSub: 'Gerencie seus posts publicados nas 4 ferramentas, acompanhe seu <b>Relatório de Criador</b> e restaure itens da Lixeira (30 dias corridos).',
            feedSavedHeading: 'Posts Salvos • Sua Biblioteca Pesquisável de Estudo',
            feedSavedSub: 'Todos os posts que você salvou organizados com busca rápida e filtros por ID, #tag, idioma, nível (CEFR) e formato.',
            btnPublicAll: '🌍 Todos os Posts Públicos',
            btnPublicFollowing: '⭐ De IDs & #Tags que Sigo',
            btnPersonalMine: '👤 Meus Posts',
            btnCreatorReport: '📊 Relatório de Criador',
            btnDownloadReport: 'Baixar Report',
            btnShowTrash: 'Ver Lixeira (30 Dias)',
            btnHideTrash: 'Ocultar Lixeira (30 Dias)',
            kpiMyId: 'Meu ID Único',
            kpiFollowers: 'Seguidores',
            kpiActivePosts: 'Posts Ativos',
            kpiTotalDownloads: 'Total Downloads',
            searchPlaceholder: 'Pesquisar por título, frase, #tag, @ID...',
            moreFiltersBtn: 'Mais Filtros',
            filterAllTools: '📚 Todas as 4 Ferramentas',
            filterToolsPrefix: '📚 Ferramentas',
            filterAllUsers: '👤 Todos os @IDs',
            filterUsersPrefix: '👤 @IDs',
            filterAllTags: '🏷️ Todas as #Tags',
            filterTagsPrefix: '🏷️ #Tags',
            filterAllLangs: '🌐 Todos os Idiomas',
            filterLangsPrefix: '🌐 Idiomas',
            filterAllLevels: '🎓 Todos os Níveis',
            filterLevelsPrefix: '🎓 Níveis',
            clearFiltersBtn: 'Limpar Filtros',
            badgeAudiocast: '🎧 Audiocast',
            badgeFlashcard: '🃏 Flashcard 3D',
            badgeBooklet: '📖 Livreto Ilustrado',
            badgeVocab: '📚 Vocabulário IA',
            yourPostBadge: '👤 Seu Post',
            followUserBtn: '+ Seguir ID',
            followingUserBtn: '✓ Seguindo ID',
            saveBtn: 'Salvar',
            savedBtn: 'Salvo ✓',
            savePostTip: 'Salvar na sua biblioteca sincronizada com Google',
            followTagBtn: '+ Seguir Tag',
            followingTagBadge: '✓ Seguindo',
            followersShort: 'seg.',
            downloadsShort: 'down.',
            postTagsLabel: 'Tags do Post:',
            downloadHtmlBtn: 'Baixar .HTML',
            deleteBtn: 'Excluir',
            restoreBtn: 'Restaurar',
            inTrashBadge: 'Na Lixeira',
            daysLeftShort: 'd restantes',
            listenBtn: 'Ouvir',
            listenAudiocast: 'Ouvir Audiocast',
            pcmCleanAudio: '24kHz PCM Sem Ruído',
            sideA: 'LADO A',
            sideBTranslations: 'LADO B • TRADUÇÕES MULTILÍNGUES',
            flipToSideB: '🔄 Clique no card para virar 3D (Lado B)',
            flipToSideA: '🔄 Clique para voltar ao Lado A',
            pageWord: 'PÁGINA',
            termWord: 'TERMO',
            ofWord: 'DE',
            prevBtn: 'Anterior',
            nextBtn: 'Próximo',
            emptyFeedTitle: 'Nenhum post encontrado neste filtro cronológico.',
            emptyFeedSub: 'Publique um novo conteúdo em uma das 4 ferramentas ou limpe os filtros.',
            emptyCreateBtn: 'Criar Novo Conteúdo (4 Opções)',
            emptyCycleMsg: 'Nenhum bloco no ciclo ainda. Clique em <b>+ Áudio</b> para sintetizar uma fala e <b>+ Pausa</b> para intercalar silêncios.',
            silencePauseLabel: 'Pausa de Silêncio',
            translateShortBtn: 'Traduzir',
            backTransPlaceholder: 'Tradução completa neste idioma...',
            backNotePlaceholder: 'Nota / fonética / contexto (opcional)',
            audioReadyShort: 'Áudio Pronto',
            audioOptionalNotGen: 'Áudio Opcional (Não gerado)',
            regenAudioBtn: 'Regerar Áudio',
            genAudioBtn: 'Gerar Áudio',
            revealTextBtn: 'Revelar texto',
            hideTextBtn: 'Ocultar texto',
            hiddenTextMaskMsg: 'Texto oculto para treino auditivo (Clique para revelar)',
            practiceDictationBtn: '✍️ Praticar Ditado',
            closeDictationBtn: 'Fechar Ditado',
            dictationInputPlaceholder: '🎧 Ouça o áudio e escreva aqui o que você entendeu...',
            checkDictationBtn: 'Exibir & Corrigir',
            accuracyLabel: 'Precisão',
            youWroteLabel: 'Você escreveu',
            fullAudioLabel: 'Áudio completo (Termo + Frase)',
            pedagogicalTipLabel: 'Dica Pedagógica',
            hintShortLabel: 'Dica',
            slideBoxHeading: 'Configuração do Slide',
            termBoxHeading: 'Configuração do Termo'
        };

        function uiT(key) {
            return IUWE_PTBR_STRINGS[key] || key;
        }

        function translateLangLabel(langCode, fallbackLabel) {
            if (langCode && LANG_LABELS[langCode]) return LANG_LABELS[langCode];
            return String(fallbackLabel || langCode || 'Idioma');
        }

        function translateCefrLevel(rawLevel) {
            const s = String(rawLevel || '').trim();
            if (/A1|A2/i.test(s)) return 'Iniciante (A1-A2)';
            if (/C1/i.test(s)) return 'Avançado (C1)';
            if (/C2/i.test(s)) return 'Fluente (C2)';
            return 'Intermediário (B1-B2)';
        }

        function translatePostMetaText(rawText) {
            return String(rawText || '');
        }

        const FORMAT_FILTER_OPTIONS = [
            { value: 'audiocast', label: '🎧 Audiocasts' },
            { value: 'flashcard', label: '🃏 Flashcards 3D' },
            { value: 'livreto', label: '📖 Livretos Ilustrados' },
            { value: 'vocabulario_ia', label: '📚 Vocabulários IA' }
        ];

        const LEVEL_FILTER_OPTIONS = [
            { value: 'Iniciante (A1-A2)', label: 'Iniciante (A1-A2)' },
            { value: 'Intermediário (B1-B2)', label: 'Intermediário (B1-B2)' },
            { value: 'Avançado (C1)', label: 'Avançado (C1)' },
            { value: 'Fluente (C2)', label: 'Fluente (C2)' }
        ];

        function renderMultiCheckboxList(category, optionsList, emptyLabel, pluralPrefix) {
            const box = document.getElementById('options-filter-' + category);
            const lbl = document.getElementById('label-filter-' + category);
            const hiddenSel = document.getElementById('feed-' + category + '-filter');
            const selected = multiFilterState[category] || [];

            if (hiddenSel) {
                hiddenSel.innerHTML = optionsList.map(o => {
                    const isSel = selected.some(s => s.toLowerCase() === String(o.value).toLowerCase());
                    return `<option value="${escapeHtml(o.value)}" ${isSel ? 'selected' : ''}>${escapeHtml(o.label)}</option>`;
                }).join('');
            }

            if (lbl) {
                if (selected.length === 0) {
                    lbl.textContent = emptyLabel;
                } else if (selected.length === 1) {
                    const found = optionsList.find(o => o.value.toLowerCase() === selected[0].toLowerCase());
                    lbl.textContent = found ? found.label : selected[0];
                } else {
                    lbl.textContent = `${pluralPrefix} (${selected.length} selecionados)`;
                }
            }

            if (!box) return;
            if (optionsList.length === 0) {
                box.innerHTML = `<div class="text-[10px] text-slate-400 italic px-1 py-1">Nenhuma opção disponível</div>`;
                return;
            }
            box.innerHTML = optionsList.map(o => {
                const checked = selected.some(s => s.toLowerCase() === String(o.value).toLowerCase());
                const safeVal = String(o.value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
                return `
                    <label class="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg hover:bg-iuwe-purple/60 cursor-pointer text-xs font-bold ${checked ? 'bg-iuwe-purple/80 text-iuwe-blue' : 'text-slate-800'}">
                        <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleMultiFilterOption('${category}', '${safeVal}')" class="rounded text-iuwe-blue focus:ring-0 shrink-0">
                        <span class="break-words whitespace-normal leading-snug">${escapeHtml(o.label)}</span>
                    </label>
                `;
            }).join('');
        }

        function populateDynamicFeedFilterDropdowns() {
            const langOptions = Object.keys(LANG_LABELS).map(code => ({ value: code, label: translateLangLabel(code, LANG_LABELS[code]) }));
            renderMultiCheckboxList('format', FORMAT_FILTER_OPTIONS, uiT('filterAllTools'), uiT('filterToolsPrefix'));
            renderMultiCheckboxList('lang', langOptions, uiT('filterAllLangs'), uiT('filterLangsPrefix'));
            renderMultiCheckboxList('level', LEVEL_FILTER_OPTIONS, uiT('filterAllLevels'), uiT('filterLevelsPrefix'));
        }

        window.renderUnifiedFeed = function() {
            const container = document.getElementById('unified-feed-container');
            const pillsBox = document.getElementById('feed-followed-tags-pills');
            if (pillsBox) {
                pillsBox.innerHTML = currentUserProfile.followedTags.length
                    ? currentUserProfile.followedTags.map(t => `
                        <span class="px-2 py-0.5 rounded-full bg-iuwe-blue/15 text-iuwe-blue border border-iuwe-blue/30 font-extrabold text-[9.5px] flex items-center gap-1 select-none" title="Seguindo ${escapeHtml(t)} (gerencie na guia Perfil/Tags)">
                            <span>${escapeHtml(t)}</span>
                        </span>
                    `).join('')
                    : `<span class="text-[10px] text-slate-400 italic">Nenhuma tag seguida (adicione na guia Perfil/Tags ou clique nas tags de um post)</span>`;
            }

            const sorted = [...archiveRecords].sort((a, b) => (b.timestampMs || 0) - (a.timestampMs || 0));
            const myHandle = getActorHandle().toLowerCase();
            if (!Array.isArray(currentUserProfile.savedPostIds)) currentUserProfile.savedPostIds = [];

            // Atualizar contadores nas abas e sub-filtros
            const publicActive = sorted.filter(r => !isRecordArchivedLgpd(r));
            const myPosts = sorted.filter(r => {
                if (getCreatorHandleFromRecord(r).toLowerCase() !== myHandle) return false;
                if (!isRecordArchivedLgpd(r)) return true;
                // Registro permanece no DB para fins legais, mas após 30 dias corridos não fica mais disponível na lixeira do usuário
                if (isRecordExpiredInUserTrash(r)) return false;
                return showArchivedRecordsInPersonal;
            });
            const followingPosts = sorted.filter(r => {
                if (isRecordArchivedLgpd(r)) return false;
                const h = getCreatorHandleFromRecord(r).toLowerCase();
                const tags = getTagsFromRecord(r).map(x => x.toLowerCase());
                const matchUser = currentUserProfile.followedUsers.some(u => u.toLowerCase() === h);
                const matchTag = currentUserProfile.followedTags.some(ft => tags.includes(ft.toLowerCase()));
                return matchUser || matchTag;
            });
            const savedPosts = sorted.filter(r => !isRecordArchivedLgpd(r) && currentUserProfile.savedPostIds.includes(r.archiveId));

            const bPub = document.getElementById('badge-count-public'); if (bPub) bPub.textContent = String(publicActive.length);
            const bPer = document.getElementById('badge-count-personal'); if (bPer) bPer.textContent = String(myPosts.length);
            const bSav = document.getElementById('badge-count-saved'); if (bSav) bSav.textContent = String(savedPosts.length);
            const cPubAll = document.getElementById('count-public-all'); if (cPubAll) cPubAll.textContent = String(publicActive.length);
            const cPubFol = document.getElementById('count-public-following'); if (cPubFol) cPubFol.textContent = String(followingPosts.length);
            const cMine = document.getElementById('count-personal-mine'); if (cMine) cMine.textContent = String(myPosts.length);
            if (typeof updateCreatorReportUi === 'function') updateCreatorReportUi(sorted);

            populateDynamicFeedFilterDropdowns(sorted);

            if (!container) return;

            const q = (document.getElementById('feed-search-input')?.value || '').trim().toLowerCase();

            let baseList = (publicFeedSubfilter === 'following') ? followingPosts : publicActive;
            if (activeMainTab === 'personal') {
                baseList = myPosts;
            } else if (activeMainTab === 'saved') {
                baseList = savedPosts;
            }

            const filtered = baseList.filter(rec => {
                const mod = detectRecordModuleType(rec);
                if (multiFilterState.format.length > 0 && !multiFilterState.format.includes(mod)) return false;

                const h = getCreatorHandleFromRecord(rec);
                if (multiFilterState.user.length > 0 && !multiFilterState.user.some(u => u.toLowerCase() === h.toLowerCase())) return false;

                const tags = getTagsFromRecord(rec);
                if (tags.some(t => currentUserProfile.blockedTags.some(bt => bt.toLowerCase() === t.toLowerCase()))) return false;
                if (multiFilterState.tag.length > 0 && !tags.some(t => multiFilterState.tag.some(ft => ft.toLowerCase() === t.toLowerCase()))) return false;

                const langs = getLanguagesFromRecord(rec);
                if (multiFilterState.lang.length > 0 && !langs.some(l => multiFilterState.lang.some(fl => fl.toLowerCase() === l.toLowerCase()))) return false;

                const lvl = getLevelFromRecord(rec);
                if (multiFilterState.level.length > 0 && !multiFilterState.level.includes(lvl)) return false;

                if (q) {
                    const title = rec.publicationMetadata?.title || rec.publicationMetadata?.bookTitle || rec.publicationMetadata?.themeTitle || '';
                    const langNames = langs.map(c => LANG_LABELS[c] || c).join(' ');
                    const hay = `${title} ${h} ${tags.join(' ')} ${langNames} ${lvl} ${rec.archiveId}`.toLowerCase();
                    if (!hay.includes(q)) return false;
                }
                return true;
            });

            if (filtered.length === 0) {
                if (activeMainTab === 'saved') {
                    container.innerHTML = `
                        <div class="iuwe-card rounded-2xl p-6 text-center space-y-2.5">
                            <div class="text-sm font-extrabold text-slate-900">🔖 Nenhum post salvo encontrado com os filtros atuais.</div>
                            <p class="text-xs text-slate-900">Salve posts no <b>Feed Público</b> ou no <b>Feed Pessoal</b> clicando em <b>"🔖 Salvar"</b> em qualquer card para organizar sua biblioteca pesquisável por usuário, #tag, idioma e nível!</p>
                            <div class="flex items-center justify-center gap-2 flex-wrap pt-1">
                                <button type="button" onclick="switchMainTab('public')" class="px-3.5 py-2 rounded-xl bg-iuwe-blue hover:bg-iuwe-sky text-white font-extrabold text-xs shadow-sm">Ir para o Feed Público</button>
                                <button type="button" onclick="resetFeedFilters()" class="px-3.5 py-2 rounded-xl bg-iuwe-purple hover:bg-iuwe-purpleMid text-slate-900 border border-iuwe-purpleBorder font-extrabold text-xs">Limpar Filtros</button>
                            </div>
                        </div>
                    `;
                } else {
                    container.innerHTML = `
                        <div class="iuwe-card rounded-2xl p-6 text-center space-y-2.5">
                            <div class="text-sm font-extrabold text-slate-900">Nenhum post encontrado neste filtro cronológico.</div>
                            <p class="text-xs text-slate-900">Publique um novo conteúdo em uma das 4 ferramentas ou limpe os filtros de usuário, tag, idioma e nível.</p>
                            <div class="flex items-center justify-center gap-2 flex-wrap pt-1">
                                <button type="button" onclick="switchMainTab('create')" class="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-extrabold text-xs shadow-sm">+ Criar Novo Conteúdo (4 Opções)</button>
                                <button type="button" onclick="resetFeedFilters()" class="px-3.5 py-2 rounded-xl bg-iuwe-purple hover:bg-iuwe-purpleMid text-slate-900 border border-iuwe-purpleBorder font-extrabold text-xs">Limpar Filtros</button>
                            </div>
                        </div>
                    `;
                }
                return;
            }

            const modBadgeMap = {
                audiocast: { label: uiT('badgeAudiocast'), cls: 'bg-purple-500 text-white' },
                flashcard: { label: uiT('badgeFlashcard'), cls: 'bg-iuwe-blue text-white' },
                livreto: { label: uiT('badgeBooklet'), cls: 'bg-iuwe-blue text-white' },
                vocabulario_ia: { label: uiT('badgeVocab'), cls: 'bg-purple-500 text-white' }
            };

            container.innerHTML = filtered.map(rec => {
                const mod = detectRecordModuleType(rec);
                const badge = modBadgeMap[mod] || modBadgeMap.audiocast;
                const handle = getCreatorHandleFromRecord(rec);
                const isSelf = handle.toLowerCase() === myHandle;
                const isFollowingUser = currentUserProfile.followedUsers.some(u => u.toLowerCase() === handle.toLowerCase());
                const isSaved = isPostSaved(rec.archiveId);
                const tags = getTagsFromRecord(rec);
                const langs = getLanguagesFromRecord(rec);
                const levelRaw = getLevelFromRecord(rec);
                const levelDisplay = translateCefrLevel(levelRaw);
                const title = rec.publicationMetadata?.title || rec.publicationMetadata?.bookTitle || rec.publicationMetadata?.themeTitle || 'Post Interativo IUWE';
                const localeMap = { pt: 'pt-BR', en: 'en-US', es: 'es-ES', fr: 'fr-CA' };
                const dateStr = new Date(rec.timestampMs || Date.now()).toLocaleString(localeMap[currentUiLang] || 'pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

                const saveBtnHtml = `
                    <button type="button" onclick="toggleSavePost('${escapeHtml(rec.archiveId)}')" class="px-3 py-1 rounded-full font-extrabold text-[10.5px] transition flex items-center gap-1 cursor-pointer ${isSaved ? 'bg-iuwe-blue text-white shadow-2xs' : 'bg-purple-50 hover:bg-purple-100 text-purple-500 border border-purple-300'}" title="${escapeHtml(uiT('savePostTip'))}">
                        <i class="fa-solid fa-bookmark"></i>
                        <span>${isSaved ? uiT('savedBtn') : uiT('saveBtn')}</span>
                    </button>
                `;

                const userActionBtns = isSelf
                    ? `<span class="px-3 py-1 rounded-full bg-purple-100 text-purple-500 border border-purple-300 font-extrabold text-[10.5px]">${uiT('yourPostBadge')}</span> ${saveBtnHtml}`
                    : `
                        <button type="button" onclick="toggleFollowUser('${escapeHtml(handle)}')" class="px-3 py-1 rounded-full font-extrabold text-[10.5px] transition cursor-pointer ${isFollowingUser ? 'iuwe-selected-white border' : 'bg-iuwe-purple hover:bg-iuwe-purpleMid text-slate-900 border border-iuwe-purpleBorder'}">
                            ${isFollowingUser ? uiT('followingUserBtn') : uiT('followUserBtn')}
                        </button>
                        ${saveBtnHtml}
                    `;

                const langsHtml = langs.map(code => {
                    const label = translateLangLabel(code, LANG_LABELS[code] || code);
                    return `<button type="button" onclick="toggleMultiFilterOption('lang', '${escapeHtml(code)}')" class="px-2.5 py-0.5 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 font-extrabold text-[10px] cursor-pointer" title="${escapeHtml(label)}">${escapeHtml(label)}</button>`;
                }).join('');

                const tagsHtml = tags.map(t => {
                    const isFollowingTag = currentUserProfile.followedTags.some(ft => ft.toLowerCase() === t.toLowerCase());
                    if (isFollowingTag) {
                        return `
                            <span class="px-2 py-0.5 rounded-full font-extrabold text-[10px] flex items-center gap-1 bg-purple-500 text-white shadow-2xs select-none">
                                <span>${escapeHtml(t)}</span>
                                <span>${uiT('followingTagBadge')}</span>
                            </span>
                        `;
                    }
                    return `
                        <button type="button" onclick="followTagFromPost('${escapeHtml(t)}')" class="px-2 py-0.5 rounded-full font-extrabold text-[10px] transition flex items-center gap-1 bg-iuwe-purple/70 text-slate-900 border border-iuwe-purpleBorder hover:bg-iuwe-purpleMid cursor-pointer">
                            <span>${escapeHtml(t)}</span>
                            <span>${uiT('followTagBtn')}</span>
                        </button>
                    `;
                }).join('');

                return `
                    <article class="iuwe-card rounded-2xl p-3.5 sm:p-4 shadow-sm space-y-3 feed-item-enter">
                        <div class="space-y-1.5 border-b border-iuwe-purpleBorder/50 pb-2.5">
                            <!-- Linha 1: Pílulas de Formato, Nível e Idiomas -->
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <span class="px-3 py-0.5 rounded-full font-extrabold text-[10px] ${badge.cls}">${badge.label}</span>
                                <button type="button" onclick="toggleMultiFilterOption('level', '${escapeHtml(levelRaw)}')" class="px-2.5 py-0.5 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-500 border border-purple-200 font-extrabold text-[10px] cursor-pointer">🎓 ${escapeHtml(levelDisplay)}</button>
                                ${langsHtml}
                                ${isRecordArchivedLgpd(rec) ? `<span class="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-300 font-extrabold text-[9.5px]">🗑️ ${uiT('inTrashBadge')} • ${getTrashRemainingDays(rec)}${uiT('daysLeftShort')}</span>` : ''}
                            </div>

                            <!-- Linha 2: Data e Hora -->
                            <div class="text-[11px] font-bold text-slate-500 pt-0.5">
                                <i class="fa-regular fa-clock mr-1"></i>${dateStr}
                            </div>

                            <!-- Linha 3: Título Principal do Post -->
                            <h3 class="text-sm sm:text-base font-extrabold text-slate-900 leading-snug pt-0.5">${escapeHtml(translatePostMetaText(title))}</h3>

                            <!-- Linha 4: Views e Downloads à Esquerda (Sem Seguidores) | @ID + Seguir ID + Salvar à Direita -->
                            <div class="flex items-center justify-between gap-2 flex-wrap pt-1.5">
                                <div class="text-[11px] font-extrabold text-purple-500 flex items-center gap-1">
                                    <span data-view-badge-id="${escapeHtml(rec.archiveId)}">👁️ ${getViewCountForRecord(rec)} views</span>
                                    <span>•</span>
                                    <span>📥 ${getDownloadCountForRecord(rec)} ${uiT('downloadsShort')}</span>
                                </div>
                                <div class="flex items-center gap-2 flex-wrap ml-auto">
                                    <button type="button" onclick="const si=document.getElementById('feed-search-input'); if(si){si.value=(si.value.trim().toLowerCase()==='${escapeHtml(handle)}'.toLowerCase()?'':'${escapeHtml(handle)}'); renderUnifiedFeed();}" class="text-xs font-extrabold text-iuwe-blue font-mono hover:underline cursor-pointer" title="${escapeHtml(handle)}">
                                        ${escapeHtml(handle)}
                                    </button>
                                    ${userActionBtns}
                                </div>
                            </div>
                        </div>

                        ${buildFeedCardInnerBody(rec, mod)}

                        <div class="flex items-center justify-between gap-2 flex-wrap pt-2 border-t border-iuwe-purpleBorder/50">
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <span class="text-[10px] font-extrabold text-purple-500">${uiT('postTagsLabel')}</span>
                                ${tagsHtml}
                            </div>
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <button type="button" onclick="openSharePostModal('${escapeHtml(rec.archiveId)}')" class="px-2.5 py-1 rounded-xl bg-sky-50 hover:bg-purple-100 text-purple-500 border border-sky-300 font-extrabold text-[10.5px] flex items-center gap-1">
                                    <i class="fa-solid fa-download"></i> <span>${uiT('downloadHtmlBtn')} (${getDownloadCountForRecord(rec)})</span>
                                </button>
                                ${(activeMainTab === 'personal' && isSelf) ? (
                                    isRecordArchivedLgpd(rec)
                                        ? `<button type="button" onclick="unarchiveRecordByArbitration('${escapeHtml(rec.archiveId)}')" class="px-2.5 py-1 rounded-xl bg-iuwe-blue hover:bg-iuwe-sky text-white font-extrabold text-[10.5px] flex items-center gap-1 shadow-2xs">
                                            <i class="fa-solid fa-rotate-left"></i> <span>${uiT('restoreBtn')} (${getTrashRemainingDays(rec)}d)</span>
                                           </button>`
                                        : `<button type="button" onclick="openDbInspectModal('${escapeHtml(rec.archiveId)}')" class="px-2.5 py-1 rounded-xl bg-iuwe-purple hover:bg-iuwe-purpleMid text-slate-900 border border-iuwe-purpleBorder font-extrabold text-[10.5px] flex items-center gap-1">
                                            <i class="fa-solid fa-trash-can text-purple-700"></i> <span>${uiT('deleteBtn')}</span>
                                           </button>`
                                ) : ''}
                            </div>
                        </div>
                    </article>
                `;
            }).join('');
        };

        // ============================================================================
        // 9. ZERO INTERAÇÃO DIRETA ENTRE USUÁRIOS (PROTEÇÃO LGPD & ID 8 DÍGITOS)
        window.renderContactsTab = function() {};
        window.switchContactsSubtab = function() {};

        // RELATÓRIO DE IMPACTO DO CRIADOR (ID 8 DÍGITOS, SEGUIDORES, POSTS E DOWNLOADS)
        // ============================================================================
        window.toggleCreatorReportDetails = function() {
            const box = document.getElementById('creator-report-details-box');
            const btn = document.getElementById('btn-toggle-creator-report');
            if (!box) return;
            const isHidden = box.classList.toggle('hidden');
            if (btn) btn.classList.toggle('iuwe-selected-blue', !isHidden);
        };

        window.updateCreatorReportUi = function(allSortedRecords) {
            const myId = getActorHandle();
            const list = Array.isArray(allSortedRecords) ? allSortedRecords : archiveRecords;
            const myActivePosts = list.filter(r => getCreatorHandleFromRecord(r).toLowerCase() === myId.toLowerCase() && !isRecordArchivedLgpd(r));
            const myTotalDownloads = myActivePosts.reduce((acc, r) => acc + getDownloadCountForRecord(r), 0);
            const myTotalViews = myActivePosts.reduce((acc, r) => acc + getViewCountForRecord(r), 0);
            const myFollowers = getFollowerCountForHandle(myId);

            const elId = document.getElementById('report-kpi-userid'); if (elId) elId.textContent = myId;
            const elFol = document.getElementById('report-kpi-followers'); if (elFol) elFol.textContent = `👥 ${myFollowers}`;
            const elPosts = document.getElementById('report-kpi-posts'); if (elPosts) elPosts.textContent = `📚 ${myActivePosts.length}`;
            const elViews = document.getElementById('report-kpi-views'); if (elViews) elViews.textContent = `👁️ ${myTotalViews}`;
            const elDown = document.getElementById('report-kpi-downloads'); if (elDown) elDown.textContent = `📥 ${myTotalDownloads}`;

            const rowsBox = document.getElementById('creator-report-rows-container');
            if (!rowsBox) return;
            if (myActivePosts.length === 0) {
                rowsBox.innerHTML = `<div class="text-slate-500 italic py-2 text-center">Você ainda não possui publicações ativas. Crie e publique materiais na guia <b>Criar</b> para acompanhar seus downloads aqui!</div>`;
                return;
            }
            const modLabels = {
                audiocast: '🎧 Audiocast',
                flashcard: '🃏 Flashcard 3D',
                livreto: '📖 Livreto',
                vocabulario_ia: '📚 Vocabulário'
            };
            rowsBox.innerHTML = myActivePosts.map(r => {
                const mod = detectRecordModuleType(r);
                const title = r.publicationMetadata?.title || r.publicationMetadata?.bookTitle || r.publicationMetadata?.themeTitle || 'Material de Estudo IUWE';
                const dCount = getDownloadCountForRecord(r);
                const vCount = getViewCountForRecord(r);
                const levelRaw = getLevelFromRecord(r);
                const levelDisplay = translateCefrLevel(levelRaw);
                const langs = getLanguagesFromRecord(r);
                const langsPills = langs.map(code => {
                    const label = translateLangLabel(code, LANG_LABELS[code] || code);
                    return `<span class="px-2 py-0.5 rounded-full bg-sky-50 text-sky-900 border border-sky-200 font-extrabold text-[9.5px]">${escapeHtml(label)}</span>`;
                }).join('');
                const dateStr = new Date(r.timestampMs || Date.now()).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
                return `
                    <div class="p-3 rounded-2xl bg-white border border-iuwe-purpleBorder space-y-1.5 shadow-2xs">
                        <div class="flex items-center gap-1.5 flex-wrap">
                            <span class="px-2.5 py-0.5 rounded-full bg-purple-500 text-white font-extrabold text-[9.5px]">${modLabels[mod] || '📚 Material'}</span>
                            <span class="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-500 border border-purple-200 font-extrabold text-[9.5px]">🎓 ${escapeHtml(levelDisplay)}</span>
                            ${langsPills}
                        </div>
                        <div class="text-[10.5px] font-bold text-slate-500"><i class="fa-regular fa-clock mr-1"></i>${dateStr}</div>
                        <div class="text-xs sm:text-sm font-extrabold text-slate-900 break-words">${escapeHtml(title)}</div>
                        <div class="flex items-center justify-between gap-2 flex-wrap pt-1 border-t border-iuwe-purpleBorder/40">
                            <div class="text-[10.5px] font-extrabold text-purple-500">👁️ ${vCount} views • 📥 ${dCount} down.</div>
                            <span class="text-[10.5px] font-extrabold text-iuwe-blue font-mono">${escapeHtml(myId)}</span>
                        </div>
                    </div>
                `;
            }).join('');
        };

        window.exportCreatorImpactReportHtml = function() {
            const myId = getActorHandle();
            const myActivePosts = archiveRecords.filter(r => getCreatorHandleFromRecord(r).toLowerCase() === myId.toLowerCase() && !isRecordArchivedLgpd(r));
            const myTotalDownloads = myActivePosts.reduce((acc, r) => acc + getDownloadCountForRecord(r), 0);
            const myFollowers = getFollowerCountForHandle(myId);
            const nowStr = new Date().toLocaleString('pt-BR');
            const modLabels = {
                audiocast: 'Audiocast',
                flashcard: 'Flashcard 3D',
                livreto: 'Livreto Ilustrado',
                vocabulario_ia: 'Vocabulário IA'
            };

            const rowsHtml = myActivePosts.length
                ? myActivePosts.map((r, i) => {
                    const mod = detectRecordModuleType(r);
                    const title = r.publicationMetadata?.title || r.publicationMetadata?.bookTitle || r.publicationMetadata?.themeTitle || 'Material IUWE';
                    const langs = getLanguagesFromRecord(r).map(c => LANG_LABELS[c] || c).join(', ') || 'Multilíngue';
                    const dCount = getDownloadCountForRecord(r);
                    const dateStr = new Date(r.timestampMs || Date.now()).toLocaleDateString('pt-BR');
                    return `<tr>
                        <td style="padding:10px;border-bottom:1px solid #334155;">${i + 1}</td>
                        <td style="padding:10px;border-bottom:1px solid #334155;font-weight:700;">${escapeHtml(title)}</td>
                        <td style="padding:10px;border-bottom:1px solid #334155;">${escapeHtml(modLabels[mod] || mod)}</td>
                        <td style="padding:10px;border-bottom:1px solid #334155;">${escapeHtml(langs)}</td>
                        <td style="padding:10px;border-bottom:1px solid #334155;">${dateStr}</td>
                        <td style="padding:10px;border-bottom:1px solid #334155;font-weight:800;color:#42A5FF;text-align:right;">${dCount}</td>
                    </tr>`;
                }).join('')
                : `<tr><td colspan="6" style="padding:16px;text-align:center;color:#94a3b8;">Nenhuma publicação ativa registrada até o momento.</td></tr>`;

            const reportHtml = `<!DOCTYPE html>
<\x68tml lang="pt-BR">
<\x68ead>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Relatório de Criador IUWE • ${escapeHtml(myId)}</title>
<style>
  body { font-family: system-ui, -apple-system, sans-serif; background: #000000; color: #F8FAFC; margin: 0; padding: 24px; }
  .card { max-width: 820px; margin: 0 auto; background: #0f101a; border: 1px solid rgba(175,95,248,0.45); border-radius: 18px; padding: 24px; }
  h1 { color: #D08AFF; margin: 0 0 6px 0; font-size: 22px; }
  .sub { color: #94a3b8; font-size: 13px; margin-bottom: 20px; }
  .kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-bottom: 24px; }
  .kpi { background: rgba(175,95,248,0.12); border: 1px solid rgba(66,165,255,0.45); border-radius: 12px; padding: 14px; }
  .kpi-lbl { font-size: 11px; text-transform: uppercase; color: #D08AFF; font-weight: 700; }
  .kpi-val { font-size: 22px; font-weight: 800; color: #FFFFFF; margin-top: 4px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; padding: 10px; border-bottom: 2px solid #AF5FF8; color: #D08AFF; font-size: 11px; text-transform: uppercase; }
  .footer { margin-top: 20px; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
  .btn { background: #42A5FF; color: #fff; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer; }
  @media print { .btn { display: none; } body { background: #fff; color: #000; } .card { border: 1px solid #ccc; background: #fff; } }
</style>
<\/head>
<\x62ody>
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
      <div>
        <h1>[IUWE] Relatório de Impacto &amp; Estatísticas do Criador</h1>
        <div class="sub">Gerado em ${nowStr} • Identificação Anônima Segura (LGPD)</div>
      </div>
      <button class="btn" onclick="window.print()">🖨️ Imprimir / Salvar PDF</button>
    </div>
    <div class="kpis">
      <div class="kpi"><div class="kpi-lbl">ID Único do Sistema</div><div class="kpi-val" style="color:#42A5FF;font-family:monospace;">${escapeHtml(myId)}</div></div>
      <div class="kpi"><div class="kpi-lbl">Seguidores do Catálogo</div><div class="kpi-val">${myFollowers}</div></div>
      <div class="kpi"><div class="kpi-lbl">Materiais Ativos</div><div class="kpi-val">${myActivePosts.length}</div></div>
      <div class="kpi"><div class="kpi-lbl">Total de Downloads</div><div class="kpi-val" style="color:#42A5FF;">${myTotalDownloads}</div></div>
    </div>
    <h3 style="color:#D08AFF;font-size:15px;margin-bottom:10px;">Desempenho por Material Publicado</h3>
    <div style="overflow-x:auto;">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Título do Material</th>
            <th>Ferramenta</th>
            <th>Idiomas</th>
            <th>Data</th>
            <th style="text-align:right;">Downloads</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
    <div class="footer">
      <span>IUWE • I learn, yoU learn, We learn (Zero Interação Direta • Foco 100% em Material de Estudo)</span>
      <span>Seguindo: ${currentUserProfile.followedUsers.length} IDs | ${currentUserProfile.followedTags.length} #Tags</span>
    </div>
  </div>
<\/body>
<\/html>`;

            const blob = new Blob([reportHtml], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `iuwe_relatorio_criador_${myId.replace('@', '')}.html`;
            a.click();
            setTimeout(() => URL.revokeObjectURL(url), 4000);
            showToast(`Relatório de impacto do ID ${myId} baixado com sucesso!`, 'success');
        };

        window.openSharePostModal = function(archiveId) {
            activeShareRecordId = archiveId;
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            const title = rec?.publicationMetadata?.title || rec?.publicationMetadata?.bookTitle || rec?.publicationMetadata?.themeTitle || archiveId;
            const tEl = document.getElementById('share-modal-title');
            const idEl = document.getElementById('share-modal-archive-id');
            if (tEl) tEl.textContent = `"${title}"`;
            if (idEl) idEl.textContent = `ID: ${archiveId}`;
            document.getElementById('share-post-modal')?.classList.remove('hidden');
        };

        window.closeSharePostModal = function() {
            document.getElementById('share-post-modal')?.classList.add('hidden');
        };

        window.downloadInteractiveHtmlFromShare = async function() {
            const rec = archiveRecords.find(r => r.archiveId === activeShareRecordId);
            if (!rec) return;
            await hydrateStreamForRecord(activeShareRecordId);
            const mod = detectRecordModuleType(rec);
            let htmlOut = rec.compiledSlideHtml || '';
            let fname = `iuwe_${mod}_${rec.archiveId}.html`;

            if (!htmlOut) {
                const handle = getCreatorHandleFromRecord(rec);
                if (mod === 'flashcard') {
                    htmlOut = buildCompiledFlashcardSlideHtml(rec);
                } else if (mod === 'livreto') {
                    const slides = rec.publicationMetadata?.slides || rec.slides || [];
                    htmlOut = buildCompiledBookletStudyHtml(rec.publicationMetadata?.bookTitle || 'Livreto IUWE', rec.archiveId, handle, slides);
                } else if (mod === 'vocabulario_ia') {
                    const items = rec.publicationMetadata?.vocabItems || rec.vocabItems || [];
                    htmlOut = buildCompiledVocabStudyHtml(rec.publicationMetadata?.themeTitle || 'Vocabulário IUWE', rec.archiveId, handle, items);
                } else {
                    htmlOut = `<!DOCTYPE html><\x68tml lang="pt-BR"><\x68ead><meta charset="UTF-8"><title>${escapeHtml(rec.archiveId)}</title><\/head><\x62ody style="font-family:sans-serif;background:#0f172a;color:#fff;padding:24px;"><h2>🎧 Audiocast IUWE (${escapeHtml(rec.archiveId)})</h2><p>${escapeHtml(rec.publicationMetadata?.title || '')}</p>${rec.generatedWavBase64 ? `<audio controls src="${rec.generatedWavBase64}"></audio>` : ''}<\/body><\/html>`;
                }
            }

            const blob = new Blob([htmlOut], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fname;
            a.click();
            setTimeout(() => URL.revokeObjectURL(url), 4000);
            incrementPostDownloadCount(rec.archiveId);
            showToast(`Arquivo interativo ${fname} baixado com sucesso!`, 'success');
        };

        window.downloadPngFromShare = function() {
            const rec = archiveRecords.find(r => r.archiveId === activeShareRecordId);
            const title = rec?.publicationMetadata?.title || rec?.archiveId || 'Post IUWE';
            const dataUrl = createContextualSceneDataUrl(title, 0);
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = `iuwe_card_${activeShareRecordId || 'post'}.png`;
            a.click();
            if (activeShareRecordId) incrementPostDownloadCount(activeShareRecordId);
            showToast('Prancha visual (.PNG) baixada!', 'success');
        };



        window.sharePostViaWhatsApp = function() {
            const rec = archiveRecords.find(r => r.archiveId === activeShareRecordId);
            const title = rec?.publicationMetadata?.title || activeShareRecordId;
            const txt = `Confira no Feed da Comunidade IUWE: "${title}" (ID: ${activeShareRecordId})`;
            window.open(`https://wa.me/?text=${encodeURIComponent(txt)}`, '_blank', 'noopener,noreferrer');
        };

        window.sharePostCopyText = function() {
            const rec = archiveRecords.find(r => r.archiveId === activeShareRecordId);
            const title = rec?.publicationMetadata?.title || activeShareRecordId;
            copyTextSafe(`Post IUWE: "${title}" (${activeShareRecordId})`);
            showToast('Resumo copiado para a área de transferência!', 'success');
        };

        window.sharePostViaEmail = function() {
            const rec = archiveRecords.find(r => r.archiveId === activeShareRecordId);
            const title = rec?.publicationMetadata?.title || activeShareRecordId;
            window.location.href = `mailto:?subject=${encodeURIComponent('Material de Estudo IUWE: ' + title)}&body=${encodeURIComponent('Confira este conteúdo interativo publicado na Comunidade IUWE: ' + title + ' (' + activeShareRecordId + ')')}`;
        };

        // --- MODAL DE EXCLUSÃO PESSOAL (LIXEIRA DE 30 DIAS CORRIDOS + CUSTÓDIA LEGAL DB) ---
        window.openDbInspectModal = function(archiveId) {
            activeInspectRecordId = archiveId;
            const rec = archiveRecords.find(r => r.archiveId === archiveId);
            const titleEl = document.getElementById('delete-modal-post-title');
            if (titleEl && rec) {
                const t = rec.publicationMetadata?.title || rec.publicationMetadata?.bookTitle || rec.publicationMetadata?.themeTitle || 'Publicação Interativa IUWE';
                titleEl.textContent = t;
            }
            document.getElementById('db-inspect-modal')?.classList.remove('hidden');
        };

        window.closeDbInspectModal = function() {
            document.getElementById('db-inspect-modal')?.classList.add('hidden');
        };

        window.unarchiveRecordByArbitration = async function(optionalArchiveId) {
            const targetId = optionalArchiveId || activeInspectRecordId;
            const rec = archiveRecords.find(r => r.archiveId === targetId);
            if (!rec) return;
            if (isRecordExpiredInUserTrash(rec)) {
                showToast('O prazo de 30 dias corridos na lixeira expirou. Não é mais possível restaurar este post.', 'error');
                renderUnifiedFeed();
                return;
            }
            rec.status = 'ACTIVE_PUBLIC';
            rec.restoredAtMs = Date.now();
            rec.restoredAtIso = new Date().toISOString();
            appendLifecycleAudit('USER_TRASH_RESTORE_WITHIN_30D', rec.archiveId, 'Publicação restaurada pelo autor dentro do prazo de 30 dias corridos.');
            saveLocalRecords();
            closeDbInspectModal();
            renderUnifiedFeed();
            showToast('Publicação restaurada ao Feed Público!', 'success');
            await pushRecordToCloud(rec, null);
        };

        window.deleteRecordByArbitration = async function() {
            const rec = archiveRecords.find(r => r.archiveId === activeInspectRecordId);
            if (!rec) return;
            const nowMs = Date.now();
            const nowIso = new Date(nowMs).toISOString();
            rec.status = 'ARCHIVED_LGPD';
            rec.archivedAtMs = nowMs;
            rec.archivedAtIso = nowIso;
            rec.trashExpiresAtMs = nowMs + TRASH_RETENTION_MS;
            rec.trashExpiresAtIso = new Date(nowMs + TRASH_RETENTION_MS).toISOString();
            rec.archivedReason = 'Excluído pelo autor na guia Pessoal (Lixeira de 30 dias corridos; registro mantido no DB para atendimento legal).';
            appendLifecycleAudit('USER_TRASH_DELETE_30D', rec.archiveId, 'Post movido para a lixeira pessoal (exclusão permanente da lixeira em 30 dias corridos; registro preservado no DB para fins legais).');
            saveLocalRecords();
            closeDbInspectModal();
            renderUnifiedFeed();
            showToast('Post movido para a Lixeira (será excluído permanentemente da lixeira em 30 dias).', 'info');
            await pushRecordToCloud(rec, null);
        };

        // --- MODAL GOOGLE SITES & APPS SCRIPT ---
// Caixa interna DB / Sites removida da interface pública

        window.copyUpdatedAppsScriptCode = function() {
            const gasCode = `// PORTEIRO APPS SCRIPT IUWE v2.0 (MODERAÇÃO ANTI-OFENSA + CLASSIFICAÇÃO AUTOMÁTICA DE TAGS • ZERO DRIVE)\nfunction doPost(e) {\n  var payload = JSON.parse(e.postData.contents || '{}');\n  return ContentService.createTextOutput(JSON.stringify({ok: true, approved: true, stage: 'DOORKEEPER_MODERATION_AND_AUTO_TAGGING_V2_0'})).setMimeType(ContentService.MimeType.JSON);\n}`;
            copyTextSafe(gasCode);
            showToast('Código Apps Script v2.0 copiado!', 'success');
        };

        window.copyHtmlForGoogleSites = function() {
            copyTextSafe(document.documentElement.outerHTML);
            showToast('Código HTML completo copiado para incorporar no Google Sites!', 'success');
        };

        window.downloadHtmlFile = function() {
            const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'iuwe_passo_05_comunidade_feed.html';
            a.click();
            showToast('Aplicativo completo (.HTML) baixado!', 'success');
        };

        // ============================================================================
        // 12. GUIA CONFIGURAÇÕES (PERFIL, PREFERÊNCIAS, TAGS SEGUIDAS & USERS SEGUIDOS)
        // ============================================================================
        window.renderConfigTab = function() {
            syncProfileInputsAndBadges();
            const tagsBox = document.getElementById('config-followed-tags-box');
            const usersBox = document.getElementById('config-followed-users-box');
            const blockedBox = document.getElementById('config-blocked-tags-box');

            if (tagsBox) {
                tagsBox.innerHTML = currentUserProfile.followedTags.length
                    ? currentUserProfile.followedTags.map(t => `
                        <button type="button" onclick="toggleFollowTag('${escapeHtml(t)}')" class="px-2.5 py-1 rounded-full bg-purple-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-2xs">
                            <span>${escapeHtml(t)}</span><span class="text-rose-200">✕</span>
                        </button>
                    `).join('')
                    : `<span class="text-xs text-slate-500">Nenhuma tag seguida no momento.</span>`;
            }

            if (usersBox) {
                usersBox.innerHTML = currentUserProfile.followedUsers.length
                    ? currentUserProfile.followedUsers.map(u => `
                        <button type="button" onclick="toggleFollowUser('${escapeHtml(u)}')" class="px-2.5 py-1 rounded-full bg-iuwe-blue text-white font-extrabold text-xs flex items-center gap-1.5 shadow-2xs">
                            <span>${escapeHtml(u)}</span><span class="text-rose-200">✕</span>
                        </button>
                    `).join('')
                    : `<span class="text-xs text-slate-500">Você ainda não segue nenhum usuário.</span>`;
            }

            if (blockedBox) {
                blockedBox.innerHTML = currentUserProfile.blockedTags.length
                    ? currentUserProfile.blockedTags.map(t => `
                        <button type="button" onclick="removeBlockedTag('${escapeHtml(t)}')" class="px-2.5 py-1 rounded-full bg-rose-600 text-white font-extrabold text-xs flex items-center gap-1.5">
                            <span>${escapeHtml(t)}</span><span>✕</span>
                        </button>
                    `).join('')
                    : `<span class="text-xs text-slate-500">Nenhuma tag bloqueada.</span>`;
            }
        };

        
        // ============================================================================
        // V2.0 UPGRADE:
        // 1) TRADUÇÃO 100% GRATUITA (POUPA A CHAVE DO USUÁRIO)
        // 2) BOTÃO MODO FREE DE ÁUDIO + FALLBACK AUTOMÁTICO PÓS-COTA (HTTP 429)
        // 3) BANCO 100% NO FIREBASE RTDB (7 TABELAS RELACIONAIS + LOG LGPD, ZERO GOOGLE FIREBASE_RTDB)
        // 4) PORTEIRO APPS SCRIPT DOORKEEPER (MODERAÇÃO ANTI-OFENSA/MISOGINIA/PRECONCEITO + CLASSIFICAÇÃO AUTOMÁTICA DE TAGS)
        // ============================================================================
        const IUWE_V2_INFRA = {
            githubRepo: "https://github.com/ceoiuwe/iuwe-v2",
            firebaseRtdbUrl: "https://iuwe-v2-d06c4-default-rtdb.firebaseio.com/",
            doorkeeperWebhookUrl: "https://script.google.com/macros/s/AKfycbxbWXGA2dMJB4y_etqm1aNIwarTYmRs2o5jgnk2sbCphrXCyUprQoIze30NvRRSAkKT/exec"
        };

        let isFreeAudioModeActive = false; // false = Gemini 24kHz (padrão) | true = Modo Free de Áudio

        window.toggleFreeAudioEngineMode = function(forceState) {
            if (typeof forceState === 'boolean') {
                isFreeAudioModeActive = forceState;
            } else {
                isFreeAudioModeActive = !isFreeAudioModeActive;
            }
            const btn = document.getElementById('btn-toggle-free-audio');
            const icon = document.getElementById('free-audio-icon');
            const lbl = document.getElementById('free-audio-label');
            if (btn && icon && lbl) {
                if (isFreeAudioModeActive) {
                    btn.className = 'w-full py-1.5 px-2 bg-iuwe-blue hover:bg-iuwe-sky text-white text-[10.5px] sm:text-xs font-extrabold rounded-xl border border-sky-300 flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer transition';
                    icon.className = 'fa-solid fa-unlock-keyhole text-white';
                    lbl.textContent = 'Áudio: Modo Free Ativo';
                } else {
                    btn.className = 'w-full py-1.5 px-2 bg-purple-500 hover:bg-purple-600 text-white text-[10.5px] sm:text-xs font-extrabold rounded-xl border border-iuwe-blue flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer transition';
                    icon.className = 'fa-solid fa-wand-magic-sparkles text-white';
                    lbl.textContent = 'Áudio: Gemini 24kHz';
                }
            }
            showToast(
                isFreeAudioModeActive
                    ? '🔓 Modo Free de Áudio ativado! Geração de áudio gratuita (sem usar chave Gemini).'
                    : '✨ Modo Gemini 24kHz ativado! Usando sua chave de API para voz neural 24kHz.',
                isFreeAudioModeActive ? 'success' : 'info'
            );
        };

        // Motor de Áudio Limpo (Zero Onda Senoidal / Zero Ruído):
        // Usa 100% o sintetizador neural Gemini 24kHz com remoção C2PA/SynthID e OfflineAudioContext.
        window.toggleFreeAudioEngineMode = function() {
            if (!secureKeyVault.hasKeySync()) {
                window.toggleApiKeyModal();
                showToast('Cole sua Chave API Gemini gratuita para sintetizar voz neural 24kHz sem ruído!', 'info');
                return;
            }
            isFreeAudioModeActive = false;
            showToast('✨ Voz Neural Gemini 24kHz ativa (Zero Ruído)!', 'success');
        };

        // ============================================================================
        // SINCRONIZAÇÃO NAS 8 TABELAS INTERCONECTADAS DO FIREBASE RTDB
        // (/users, /posts, /post_payloads, /social_graph, /contacts, /messages, /meet_sessions, /custody_audit_log)
        // ============================================================================
        async function syncRelationalTablesV2(tablePath, payloadObj) {
            const fbUrl = DEFAULT_FIREBASE_URL.trim().replace(/\/+$/, '');
            if (!fbUrl) return;
            try {
                await remoteCloudFetch(fbUrl + '/' + tablePath + '.json', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payloadObj)
                });
            } catch (e) {}
        }

        const _origPushRecordToCloud = pushRecordToCloud;
        pushRecordToCloud = async function(record, streamPayload) {
            // 1. Executa primeiro a moderação do Porteiro Apps Script + Classificação Automática de Tags
            const modResult = await _origPushRecordToCloud(record, streamPayload);
            if (modResult && modResult.blocked) {
                return modResult;
            }

            const handleKey = getCreatorHandleFromRecord(record).replace(/[^a-zA-Z0-9_@-]/g, '_');
            const mod = detectRecordModuleType(record);
            const title = record.publicationMetadata?.title || record.publicationMetadata?.bookTitle || record.publicationMetadata?.themeTitle || 'Post IUWE';
            const tags = (modResult && Array.isArray(modResult.autoTags)) ? modResult.autoTags : getTagsFromRecord(record);

            // Tabela 1: /users/{handleKey}
            await syncRelationalTablesV2('users/' + encodeURIComponent(handleKey), {
                handle: getCreatorHandleFromRecord(record),
                displayName: currentUserProfile.displayName,
                nativeLang: currentUserProfile.nativeLang,
                learningLangs: currentUserProfile.learningLangs,
                bio: currentUserProfile.bio,
                isAdult18Plus: currentUserProfile.isAdult18Plus,
                updatedAtIso: new Date().toISOString()
            });

            // Tabela 2: /posts/{archiveId} (Cabeçalho leve com Tags Classificadas Automaticamente)
            await syncRelationalTablesV2('posts/' + encodeURIComponent(record.archiveId), {
                archiveId: record.archiveId,
                moduleType: mod,
                authorHandle: getCreatorHandleFromRecord(record),
                authorAuthUid: (currentGmailAuthSession && currentGmailAuthSession.uid) ? currentGmailAuthSession.uid : 'visitor',
                authorTokenHash: typeof getAuthorTokenHash === 'function' ? getAuthorTokenHash() : '',
                authorDisplayName: currentUserProfile.displayName,
                title: title,
                tags: tags,
                audioEngine: isFreeAudioModeActive ? 'FREE_TTS_MODE' : 'GEMINI_24KHZ',
                status: record.status || 'ACTIVE_PUBLIC',
                timestampMs: record.timestampMs || Date.now(),
                createdAtIso: record.createdAtIso || new Date().toISOString(),
                publicationMetadata: record.publicationMetadata || {}
            });

            // Tabela 3: /post_payloads/{archiveId} (HTML Autônomo 3D e Streams no Firebase RTDB)
            if (streamPayload) {
                await syncRelationalTablesV2('post_payloads/' + encodeURIComponent(record.archiveId), streamPayload);
            }

            // Tabela 8: /custody_audit_log/{logId}
            const logId = 'LOG-' + Date.now();
            await syncRelationalTablesV2('custody_audit_log/' + logId, {
                logId: logId,
                archiveId: record.archiveId,
                stage: 'DOORKEEPER_MODERATED_AND_TAGGED_FIREBASE_RTDB',
                actorHandle: getCreatorHandleFromRecord(record),
                audioEngine: isFreeAudioModeActive ? 'FREE_TTS_MODE' : 'GEMINI_24KHZ',
                autoTags: tags,
                doorkeeperProtected: true,
                timestampIso: new Date().toISOString()
            });

            return modResult;
        };

        // ============================================================================
        // 13. INICIALIZAÇÃO GERAL DO PASSO 5 (COMUNIDADE & FEED CRONOLÓGICO)
        // ============================================================================
        window.addEventListener('DOMContentLoaded', () => {
            loadSavedUserPrefs();
            loadLocalRecords();
            ensureDemoSeedPostsIfEmpty();

            // Se estivermos em uma das 6 páginas do Aplicativo/Estúdio (possui #unified-feed-container):
            if (document.getElementById('unified-feed-container')) {
                populateAllLanguageSelects();

                bookletSlides = makeDefaultSlides();
                renderSlideTabsAndEditor();
                window.renderActiveSlideStage();

                vocabItems = makeDefaultVocabItems();
                renderVocabTabsAndEditor();
                renderBackLanguageItems();
                syncDraftPreviewCard();
                renderCycleBlocks();

                renderUnifiedFeed();
                renderContactsTab();
                renderConfigTab();

                const hashTab = (window.location.hash || '').replace(/^#/, '').trim().toLowerCase();
                const validTabs = ['public', 'personal', 'create', 'saved', 'config', 'contacts'];
                const targetTab = validTabs.includes(hashTab)
                    ? hashTab
                    : (window.IUWE_INITIAL_TAB || 'public');

                setTimeout(() => { window.switchMainTab(targetTab); }, 60);
                setTimeout(() => { window.refreshFeedFromCloudDb(true); }, 500);
            } else {
                // Estamos em uma das 4 páginas institucionais (sobre.html, Fato_Curioso.html, metas-onu.html, guia.html)
                setTimeout(() => { window.refreshFeedFromCloudDb(true); }, 500);
            }
        });
    

        // ============================================================================
        // MOTOR HÍBRIDO IUWE v2.0: ESTÚDIO ABERTO + LOGIN GOOGLE SOB DEMANDA + KYC
        // - Sem bloqueio inicial: visitante usa Feed Público e as 4 ferramentas na hora
        // - Pede Login Google ao clicar em "Salvar", abrir "Pessoal"/"Salvos" ou sincronizar
        // - Registra usuários autenticados em /kyc_verified_users para validação orgânica
        // ============================================================================
        const CRYPTO_IDENTITY_STORAGE_KEY = 'iuwe_crypto_identity_v3';
        const GMAIL_HYBRID_SESSION_KEY = 'iuwe_gmail_hybrid_session_v3';
        const FIREBASE_RTDB_BASE_URL = 'https://iuwe-v2-d06c4-default-rtdb.firebaseio.com';

        let localCryptoIdentity = null;
        let currentGmailAuthSession = null;
        let firebaseAppInstance = null;
        let firebaseAuthInstance = null;
        let isFinalizingGoogleSession = false;
        let pendingSaveArchiveIdAfterLogin = null;

        function generateSecureHex(byteCount) {
            const arr = new Uint8Array(byteCount || 16);
            if (window.crypto && window.crypto.getRandomValues) {
                window.crypto.getRandomValues(arr);
            } else {
                for (let i = 0; i < arr.length; i++) arr[i] = Math.floor(Math.random() * 256);
            }
            return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
        }

        function computeFastDeterministicHash64(inputStr) {
            const str = String(inputStr || '');
            const seeds = [0x811c9dc5, 0x9e3779b9, 0x85ebca6b, 0xc2b2ae35, 0x27d4eb2f, 0x165667b1, 0xd3a2646c, 0xfd7046c5];
            for (let i = 0; i < str.length; i++) {
                const ch = str.charCodeAt(i);
                for (let s = 0; s < seeds.length; s++) {
                    seeds[s] ^= (ch + s * 31);
                    seeds[s] = Math.imul(seeds[s], 0x01000193) >>> 0;
                    seeds[s] = ((seeds[s] << 13) | (seeds[s] >>> 19)) >>> 0;
                }
            }
            return seeds.map(v => (v >>> 0).toString(16).padStart(8, '0')).join('');
        }

        function computeDeterministic8DigitFromGoogleUid(googleUid) {
            const clean = String(googleUid || '').trim();
            if (!clean) return '@00000000';
            let h1 = 0x811c9dc5;
            for (let i = 0; i < clean.length; i++) {
                h1 ^= clean.charCodeAt(i);
                h1 = Math.imul(h1, 0x01000193);
            }
            const num8 = 10000000 + (Math.abs(h1) % 90000000);
            return '@' + String(num8);
        }

        function maskGmailForPrivateBadge(email) {
            const clean = String(email || '').trim().toLowerCase();
            const parts = clean.split('@');
            if (parts.length !== 2) return 'Google ✓';
            const name = parts[0];
            const maskedName = name.length <= 3 ? (name[0] + '••') : (name.slice(0, 3) + '•••');
            return maskedName + '@' + parts[1];
        }

        function buildPortableCode(publicHandle, secretToken) {
            const digits = String(publicHandle || '').replace('@', '');
            return 'IUWE-' + digits + '-' + secretToken;
        }

        function ensureLocalCryptoIdentity() {
            if (localCryptoIdentity && /^@\d{8}$/.test(localCryptoIdentity.publicHandle)) {
                return localCryptoIdentity;
            }
            try {
                const raw = localStorage.getItem(CRYPTO_IDENTITY_STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (parsed && /^@\d{8}$/.test(String(parsed.publicHandle || '')) && String(parsed.secretToken || '').startsWith('iuwe_sec_')) {
                        parsed.authorHash = parsed.authorHash || computeFastDeterministicHash64(parsed.publicHandle + ':' + parsed.secretToken);
                        parsed.portableCode = buildPortableCode(parsed.publicHandle, parsed.secretToken);
                        localCryptoIdentity = parsed;
                        return localCryptoIdentity;
                    }
                }
            } catch (e) {}

            let existingHandle = '';
            try {
                const devId = typeof getOrInitPersistentDeviceUserId === 'function' ? getOrInitPersistentDeviceUserId() : String(localStorage.getItem(PERSISTENT_DEVICE_USER_ID_KEY) || '').trim();
                if (/^@\d{8}$/.test(devId)) {
                    existingHandle = devId;
                } else if (typeof currentUserProfile === 'object' && currentUserProfile && /^@\d{8}$/.test(String(currentUserProfile.handle || ''))) {
                    existingHandle = currentUserProfile.handle;
                }
            } catch (e) {}

            const publicHandle = existingHandle || (typeof getOrInitPersistentDeviceUserId === 'function' ? getOrInitPersistentDeviceUserId() : ('@' + String(10000000 + Math.floor(Math.random() * 90000000))));
            const secretToken = 'iuwe_sec_' + generateSecureHex(16);
            const authorHash = computeFastDeterministicHash64(publicHandle + ':' + secretToken);
            const portableCode = buildPortableCode(publicHandle, secretToken);

            localCryptoIdentity = {
                publicHandle: publicHandle,
                secretToken: secretToken,
                authorHash: authorHash,
                portableCode: portableCode,
                createdAtIso: new Date().toISOString()
            };
            try {
                localStorage.setItem(CRYPTO_IDENTITY_STORAGE_KEY, JSON.stringify(localCryptoIdentity));
            } catch (e) {}
            return localCryptoIdentity;
        }

        function getAuthorTokenHash() {
            const idObj = ensureLocalCryptoIdentity();
            return idObj.authorHash;
        }

        function getEffectiveFirebaseConfig() {
            return (typeof window.IUWE_FIREBASE_CONFIG === 'object' && window.IUWE_FIREBASE_CONFIG)
                ? { ...window.IUWE_FIREBASE_CONFIG }
                : {
                    apiKey: "AIzaSyB8yKKt2BzdMPfpNYttbABUvE40X05vqhc",
                    authDomain: "iuwe-v2-d06c4.firebaseapp.com",
                    databaseURL: "https://iuwe-v2-d06c4-default-rtdb.firebaseio.com",
                    projectId: "iuwe-v2-d06c4",
                    storageBucket: "iuwe-v2-d06c4.firebasestorage.app",
                    messagingSenderId: "1000690486655",
                    appId: "1:1000690486655:web:2b35e994cc617fa2359e4a",
                    measurementId: "G-584HX6Q4WS"
                };
        }

        function ensureFirebaseAuthInitialized() {
            if (firebaseAuthInstance) return firebaseAuthInstance;
            if (typeof window.firebase === 'undefined' || !window.firebase.auth) return null;
            const cfg = getEffectiveFirebaseConfig();
            try {
                if (!window.firebase.apps || window.firebase.apps.length === 0) {
                    firebaseAppInstance = window.firebase.initializeApp(cfg);
                } else {
                    firebaseAppInstance = window.firebase.app();
                }
                firebaseAuthInstance = window.firebase.auth();
                if (window.firebase.auth.Auth && window.firebase.auth.Auth.Persistence) {
                    firebaseAuthInstance.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL).catch(function() {
                        return firebaseAuthInstance.setPersistence(window.firebase.auth.Auth.Persistence.SESSION);
                    }).catch(function() {
                        return firebaseAuthInstance.setPersistence(window.firebase.auth.Auth.Persistence.NONE);
                    }).catch(function() {});
                }
                if (typeof firebaseAuthInstance.getRedirectResult === 'function') {
                    firebaseAuthInstance.getRedirectResult().then(function(res) {
                        if (res && res.user) finalizeHybridGoogleSession(res.user);
                    }).catch(function() {});
                }
                return firebaseAuthInstance;
            } catch (e) {
                return null;
            }
        }

        function isUserGoogleAuthenticated() {
            return Boolean(currentGmailAuthSession && currentGmailAuthSession.uid && currentGmailAuthSession.verifiedByGoogleOAuth);
        }

        function loadStoredHybridGoogleSession() {
            try {
                const raw = localStorage.getItem(GMAIL_HYBRID_SESSION_KEY);
                if (!raw) return null;
                const parsed = JSON.parse(raw);
                if (parsed && parsed.uid && /^@\d{8}$/.test(String(parsed.boundHandle || ''))) {
                    currentGmailAuthSession = parsed;
                    return parsed;
                }
            } catch (e) {}
            return null;
        }

        window.openHybridGoogleAuthModal = function(reasonText, optionalPendingSaveId) {
            if (optionalPendingSaveId) {
                pendingSaveArchiveIdAfterLogin = optionalPendingSaveId;
            }
            const reasonEl = document.getElementById('hybrid-auth-reason-text');
            if (reasonEl && reasonText) {
                reasonEl.textContent = reasonText;
            }
            const prevHandleEl = document.getElementById('hybrid-modal-preview-handle');
            if (prevHandleEl) {
                prevHandleEl.textContent = getActorHandle();
            }
            const idObj = ensureLocalCryptoIdentity();
            const mCode = document.getElementById('modal-portable-code-display');
            if (mCode) mCode.value = idObj.portableCode;

            const errBox = document.getElementById('hybrid-auth-error-msg');
            if (errBox) errBox.classList.add('hidden');

            const modal = document.getElementById('iuwe-hybrid-auth-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        };

        window.closeHybridGoogleAuthModal = function() {
            const modal = document.getElementById('iuwe-hybrid-auth-modal');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        };

        window.togglePortableKeySubbox = function() {
            const sub = document.getElementById('hybrid-portable-key-subbox');
            if (sub) sub.classList.toggle('hidden');
        };

        window.copyMyPortableAccessCode = function() {
            const idObj = ensureLocalCryptoIdentity();
            if (typeof copyTextSafe === 'function') {
                copyTextSafe(idObj.portableCode);
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(idObj.portableCode).catch(function() {});
            }
            if (typeof showToast === 'function') {
                showToast('🔑 Código Portátil (' + idObj.publicHandle + ') copiado!', 'success');
            }
        };

        window.importPortableAccessCodeFromInput = async function(inputId) {
            const inp = document.getElementById(inputId || 'modal-import-portable-code-input');
            const raw = String(inp ? inp.value : '').trim();
            const match = raw.match(/^IUWE-(\d{8})-(iuwe_sec_[a-fA-F0-9]{16,64})$/);
            if (!match) {
                if (typeof showToast === 'function') {
                    showToast('Formato inválido. Cole sua Chave Secreta no formato IUWE-12345678-iuwe_sec_...', 'error');
                }
                return;
            }
            const publicHandle = '@' + match[1];
            const secretToken = match[2].toLowerCase();
            const authorHash = computeFastDeterministicHash64(publicHandle + ':' + secretToken);
            const handleKey = publicHandle.replace(/[^a-zA-Z0-9_@-]/g, '_');

            // Valida na nuvem se este ID possui um authorTokenHash registrado; se possuir e não bater com a chave secreta, recusa!
            try {
                const usrRes = await fetch(FIREBASE_RTDB_BASE_URL + '/users/' + encodeURIComponent(handleKey) + '.json');
                if (usrRes && usrRes.ok) {
                    const usrData = await usrRes.json();
                    if (usrData && usrData.authorTokenHash && usrData.authorTokenHash !== authorHash) {
                        if (typeof showToast === 'function') {
                            showToast('🔒 Chave Secreta incorreta para o ID ' + publicHandle + '! Acesso negado.', 'error');
                        }
                        return;
                    }
                }
            } catch (e) {}

            localCryptoIdentity = {
                publicHandle: publicHandle,
                secretToken: secretToken,
                authorHash: authorHash,
                portableCode: buildPortableCode(publicHandle, secretToken),
                restoredAtIso: new Date().toISOString()
            };
            try {
                localStorage.setItem(PERSISTENT_DEVICE_USER_ID_KEY, publicHandle);
                localStorage.setItem(CRYPTO_IDENTITY_STORAGE_KEY, JSON.stringify(localCryptoIdentity));
            } catch (e) {}

            // Ativa sessão autenticada por Chave Criptográfica Portátil de 128 bits
            const sessionPayload = {
                uid: 'portable_key_' + authorHash.slice(0, 24),
                maskedEmail: 'Chave Criptográfica ✓',
                boundHandle: publicHandle,
                idToken: '',
                verifiedByGoogleOAuth: true,
                provider: 'iuwe_portable_crypto_key_128bit',
                authenticatedAtIso: new Date().toISOString()
            };
            currentGmailAuthSession = sessionPayload;
            try { localStorage.setItem(GMAIL_HYBRID_SESSION_KEY, JSON.stringify(sessionPayload)); } catch (e) {}

            if (typeof currentUserProfile === 'object' && currentUserProfile) {
                currentUserProfile.handle = publicHandle;
                currentUserProfile.displayName = 'ID ' + publicHandle;
                if (typeof persistUserPrefs === 'function') persistUserPrefs();
            }

            // Recupera itens salvos e tags seguidas da nuvem para este ID
            try {
                const sgRes = await fetch(FIREBASE_RTDB_BASE_URL + '/social_graph/' + encodeURIComponent(handleKey) + '.json');
                if (sgRes && sgRes.ok) {
                    const cloudGraph = await sgRes.json();
                    if (cloudGraph && typeof currentUserProfile === 'object' && currentUserProfile) {
                        if (Array.isArray(cloudGraph.savedPostIds)) {
                            currentUserProfile.savedPostIds = Array.from(new Set([...(currentUserProfile.savedPostIds || []), ...cloudGraph.savedPostIds]));
                        }
                        if (Array.isArray(cloudGraph.followedTags)) {
                            currentUserProfile.followedTags = Array.from(new Set([...(currentUserProfile.followedTags || []), ...cloudGraph.followedTags]));
                        }
                        if (Array.isArray(cloudGraph.followedUsers)) {
                            currentUserProfile.followedUsers = Array.from(new Set([...(currentUserProfile.followedUsers || []), ...cloudGraph.followedUsers]));
                        }
                        if (typeof persistUserPrefs === 'function') persistUserPrefs();
                    }
                }
            } catch (e) {}

            if (inp) inp.value = '';
            applyHybridAuthUiState();
            closeHybridGoogleAuthModal();
            if (typeof showToast === 'function') {
                showToast('🔐 Chave Criptográfica validada! ID ' + publicHandle + ' e biblioteca restaurados com segurança.', 'success');
            }
        };

        async function finalizeHybridGoogleSession(firebaseUser) {
            if (!firebaseUser || isFinalizingGoogleSession) return;
            const uid = String(firebaseUser.uid || '').trim();
            if (!uid) return;

            isFinalizingGoogleSession = true;
            try {
                const providerEmail = (Array.isArray(firebaseUser.providerData) && firebaseUser.providerData[0] && firebaseUser.providerData[0].email) || '';
                const email = String(firebaseUser.email || providerEmail || (uid.slice(0, 8) + '@gmail.com')).trim().toLowerCase();
                const displayNameGoogle = String(firebaseUser.displayName || '').trim();

                let idToken = '';
                try {
                    if (typeof firebaseUser.getIdToken === 'function') {
                        idToken = await Promise.race([firebaseUser.getIdToken(), new Promise(function(r){ setTimeout(function(){ r(''); }, 1200); })]);
                    }
                } catch (e) {}

                const previousVisitorHandle = (typeof currentUserProfile === 'object' && currentUserProfile && currentUserProfile.handle) ? currentUserProfile.handle : '';
                const boundHandle = computeDeterministic8DigitFromGoogleUid(uid);

                // Sincroniza a identidade local do aparelho (pós-limpeza de cache) para assumir o ID oficial vinculado ao token Google OAuth
                try {
                    localStorage.setItem(PERSISTENT_DEVICE_USER_ID_KEY, boundHandle);
                    const idObj = ensureLocalCryptoIdentity();
                    idObj.publicHandle = boundHandle;
                    // Mantém o secretToken determinístico a partir do UID autenticado do Google para que a Chave Portátil seja sempre a mesma após limpar o cache
                    idObj.secretToken = 'iuwe_sec_' + computeFastDeterministicHash64('iuwe_oauth_uid_secret_v3:' + uid).slice(0, 32);
                    idObj.authorHash = computeFastDeterministicHash64(boundHandle + ':' + idObj.secretToken);
                    idObj.portableCode = buildPortableCode(boundHandle, idObj.secretToken);
                    localCryptoIdentity = idObj;
                    localStorage.setItem(CRYPTO_IDENTITY_STORAGE_KEY, JSON.stringify(idObj));
                } catch (e) {}

                const sessionPayload = {
                    uid: uid,
                    emailBlindHash: computeFastDeterministicHash64('iuwe_kyc_blind_index_v3:' + email),
                    maskedEmail: maskGmailForPrivateBadge(email),
                    boundHandle: boundHandle,
                    idToken: idToken,
                    verifiedByGoogleOAuth: true,
                    provider: 'google.com (Firebase Auth OAuth 2.0)',
                    authenticatedAtIso: new Date().toISOString()
                };

                currentGmailAuthSession = sessionPayload;
                try {
                    localStorage.setItem(GMAIL_HYBRID_SESSION_KEY, JSON.stringify(sessionPayload));
                } catch (e) {}

                // Migra posts criados como visitante na sessão atual para o ID Google Verificado
                if (typeof archiveRecords !== 'undefined' && Array.isArray(archiveRecords) && previousVisitorHandle && previousVisitorHandle !== boundHandle) {
                    archiveRecords.forEach(function(r) {
                        if (r && r.creatorMetadata && r.creatorMetadata.handle === previousVisitorHandle) {
                            r.creatorMetadata.handle = boundHandle;
                            r.creatorMetadata.displayName = 'ID ' + boundHandle;
                            r.authorAuthUid = uid;
                        }
                    });
                    if (typeof saveLocalRecords === 'function') saveLocalRecords();
                }

                // Se o login foi disparado ao clicar em "Salvar" num post, conclui o salvamento automaticamente!
                if (pendingSaveArchiveIdAfterLogin && typeof currentUserProfile === 'object' && currentUserProfile) {
                    if (!Array.isArray(currentUserProfile.savedPostIds)) currentUserProfile.savedPostIds = [];
                    if (!currentUserProfile.savedPostIds.includes(pendingSaveArchiveIdAfterLogin)) {
                        currentUserProfile.savedPostIds.unshift(pendingSaveArchiveIdAfterLogin);
                    }
                    pendingSaveArchiveIdAfterLogin = null;
                    if (typeof persistUserPrefs === 'function') persistUserPrefs();
                }

                closeHybridGoogleAuthModal();
                applyHybridAuthUiState();

                if (typeof showToast === 'function') {
                    showToast('☁️ Conta Google conectada! Seu histórico e biblioteca estão sincronizados no ID ' + boundHandle, 'success');
                }

                // Sincroniza KYC (Know Your Customer para apoiadores) e grafo social no Firebase RTDB em segundo plano
                const authQuery = idToken ? ('?auth=' + encodeURIComponent(idToken)) : '';
                const handleKey = boundHandle.replace(/[^a-zA-Z0-9_@-]/g, '_');

                // 1. Recupera biblioteca salva anterior desta conta Google na nuvem e mescla
                try {
                    const sgRes = await fetch(FIREBASE_RTDB_BASE_URL + '/social_graph/' + encodeURIComponent(handleKey) + '.json' + authQuery);
                    if (sgRes.ok) {
                        const cloudGraph = await sgRes.json();
                        if (cloudGraph && typeof currentUserProfile === 'object' && currentUserProfile) {
                            if (Array.isArray(cloudGraph.savedPostIds)) {
                                currentUserProfile.savedPostIds = Array.from(new Set([...(currentUserProfile.savedPostIds || []), ...cloudGraph.savedPostIds]));
                            }
                            if (Array.isArray(cloudGraph.followedTags)) {
                                currentUserProfile.followedTags = Array.from(new Set([...(currentUserProfile.followedTags || []), ...cloudGraph.followedTags]));
                            }
                            if (Array.isArray(cloudGraph.followedUsers)) {
                                currentUserProfile.followedUsers = Array.from(new Set([...(currentUserProfile.followedUsers || []), ...cloudGraph.followedUsers]));
                            }
                            if (typeof persistUserPrefs === 'function') persistUserPrefs();
                            if (typeof renderUnifiedFeed === 'function') renderUnifiedFeed();
                            if (typeof renderConfigTab === 'function') renderConfigTab();
                        }
                    }
                } catch (e) {}

                // 2. Criptografia Assimétrica RSA-OAEP 2048-bit (Zero Texto Limpo no Banco) + Blind Index SHA-256 + Comparação Prévia (Registra Apenas se Não Existir)
                (async function registerEncryptedKycIfNotExists() {
                    try {
                        const normalizedEmail = String(email || '').trim().toLowerCase();
                        // Passo A: Gera Blind Index SHA-256 irreversível para comparação sem expor o e-mail
                        let emailBlindHash = computeFastDeterministicHash64('iuwe_kyc_blind_index_v3:' + normalizedEmail);
                        if (window.crypto && window.crypto.subtle) {
                            const digestBuf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode('iuwe_kyc_blind_index_v3:' + normalizedEmail));
                            emailBlindHash = Array.from(new Uint8Array(digestBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
                        }

                        // Passo B: Verifica no Firebase se o registro já existe (comparação por UID e emailBlindHash)
                        const kycUrl = FIREBASE_RTDB_BASE_URL + '/kyc_verified_users/' + encodeURIComponent(uid) + '.json' + authQuery;
                        let alreadyRegistered = false;
                        try {
                            const checkRes = await fetch(kycUrl);
                            if (checkRes.ok) {
                                const existingKyc = await checkRes.json();
                                if (existingKyc && existingKyc.emailBlindHash === emailBlindHash && existingKyc.encryptedIdentityCipherB64) {
                                    alreadyRegistered = true;
                                }
                            }
                        } catch (e) {}

                        if (alreadyRegistered) {
                            // Usuário já registrado com e-mail criptografado: atualiza apenas metadados não-sensíveis (sem regravar e-mail)
                            await fetch(kycUrl, {
                                method: 'PATCH',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    savedPostsCount: (typeof currentUserProfile === 'object' && currentUserProfile && Array.isArray(currentUserProfile.savedPostIds)) ? currentUserProfile.savedPostIds.length : 0,
                                    lastLoginAtIso: sessionPayload.authenticatedAtIso
                                })
                            }).catch(function() {});
                            return;
                        }

                        // Passo C: Criptografa email + displayNameGoogle usando a Chave Pública RSA-OAEP 2048-bit da IUWE
                        // (Somente a Chave Privada offline do administrador consegue decriptar!)
                        const IUWE_ADMIN_PUBLIC_JWK = {"key_ops": ["encrypt"], "ext": true, "kty": "RSA", "n": "o4lmku-hLMAD1H1blWbLDVCfo0ncqxRr2IXtmYAPCZaE_DRIrT4ZrCxBOdmPKb3gdihoONLMMWBizSSCPrIYsdOpNRe5MI2Z6amlswCQqn0wIOMXokFBIk3Am_pro_iXWWchIlEgFmbW98-Xs9zd4Yjxk3iHrsIv49xCA3YotXYTvfAV5z3Mo2dT4Fr79ddhI7tEZoc6gfZf4UuLXrIpa6Sp7O1z6d_D7GBhx839SF2Q2bfUmR13hFLRMK9KgB_6u9XFW9z0_dsvw9rPwr7Ylbnfw0KEUNF-lvabiVF8TXbHMUCM9JslXzV8t4caUz1IzpOY-Ro3ugxGN8uhbKtjTQ", "e": "AQAB", "alg": "RSA-OAEP-256"};
                        let encryptedIdentityCipherB64 = '';
                        if (window.crypto && window.crypto.subtle) {
                            const pubKey = await window.crypto.subtle.importKey(
                                'jwk',
                                IUWE_ADMIN_PUBLIC_JWK,
                                { name: 'RSA-OAEP', hash: 'SHA-256' },
                                false,
                                ['encrypt']
                            );
                            const secretPlaintext = JSON.stringify({
                                email: normalizedEmail,
                                displayNameGoogle: displayNameGoogle,
                                uid: uid,
                                boundHandle: boundHandle,
                                encryptedAtIso: sessionPayload.authenticatedAtIso
                            });
                            const cipherBuf = await window.crypto.subtle.encrypt(
                                { name: 'RSA-OAEP' },
                                pubKey,
                                new TextEncoder().encode(secretPlaintext)
                            );
                            const bytes = new Uint8Array(cipherBuf);
                            let bin = '';
                            for (let i = 0; i < bytes.byteLength; i++) bin += String.fromCharCode(bytes[i]);
                            encryptedIdentityCipherB64 = window.btoa(bin);
                        }

                        // Grava no Firebase APENAS o hash cego e o pacote cifrado RSA-OAEP (ZERO e-mail ou nome em texto limpo!)
                        await fetch(kycUrl, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                uid: uid,
                                boundHandle: boundHandle,
                                emailBlindHash: emailBlindHash,
                                encryptedIdentityCipherB64: encryptedIdentityCipherB64,
                                encryptionAlgorithm: 'RSA-OAEP-2048-SHA256',
                                maskedDomainHint: normalizedEmail.includes('@') ? ('***@' + normalizedEmail.split('@')[1]) : '***',
                                nativeLang: (typeof currentUserProfile === 'object' && currentUserProfile) ? currentUserProfile.nativeLang : '🇧🇷 Português (BR)',
                                learningLangs: (typeof currentUserProfile === 'object' && currentUserProfile) ? currentUserProfile.learningLangs : '',
                                savedPostsCount: (typeof currentUserProfile === 'object' && currentUserProfile && Array.isArray(currentUserProfile.savedPostIds)) ? currentUserProfile.savedPostIds.length : 0,
                                termsAcceptedLgpd: true,
                                verifiedByGoogleOAuth: true,
                                createdAtIso: sessionPayload.authenticatedAtIso,
                                lastLoginAtIso: sessionPayload.authenticatedAtIso
                            })
                        }).catch(function() {});
                    } catch (e) {}
                })();

                // 3. Atualiza /users/{handleKey} e /social_graph/{handleKey} (exigindo authUid ou authorTokenHash criptográfico)
                fetch(FIREBASE_RTDB_BASE_URL + '/users/' + encodeURIComponent(handleKey) + '.json' + authQuery, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        handle: boundHandle,
                        displayName: 'ID ' + boundHandle,
                        authUid: uid,
                        authProvider: 'google_oauth_hybrid',
                        authorTokenHash: getAuthorTokenHash(),
                        updatedAtIso: sessionPayload.authenticatedAtIso
                    })
                }).catch(function() {});

                if (typeof currentUserProfile === 'object' && currentUserProfile) {
                    fetch(FIREBASE_RTDB_BASE_URL + '/social_graph/' + encodeURIComponent(handleKey) + '.json' + authQuery, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            handle: boundHandle,
                            authUid: uid,
                            followedTags: currentUserProfile.followedTags || [],
                            followedUsers: currentUserProfile.followedUsers || [],
                            savedPostIds: currentUserProfile.savedPostIds || [],
                            updatedAtIso: sessionPayload.authenticatedAtIso
                        })
                    }).catch(function() {});
                }

                if (typeof window.refreshFeedFromCloudDb === 'function') {
                    window.refreshFeedFromCloudDb(true);
                }
            } finally {
                isFinalizingGoogleSession = false;
            }
        }

        window.signInWithGoogleHybridRedirect = async function() {
            const auth = ensureFirebaseAuthInitialized();
            if (!auth) return;
            try {
                const provider = new window.firebase.auth.GoogleAuthProvider();
                provider.setCustomParameters({ prompt: 'select_account' });
                await auth.signInWithRedirect(provider);
            } catch (e) {}
        };

        window.signInWithGoogleHybridPopup = async function() {
            const chk = document.getElementById('hybrid-auth-lgpd-check');
            const errBox = document.getElementById('hybrid-auth-error-msg');
            const btn = document.getElementById('btn-hybrid-google-login');

            const showErr = function(msg) {
                if (errBox) {
                    errBox.innerHTML = msg;
                    errBox.classList.remove('hidden');
                }
            };

            if (chk && !chk.checked) {
                showErr('Marque o aceite dos Termos de Privacidade (LGPD) para conectar sua Conta Google.');
                return;
            }

            if (window.location.protocol === 'file:') {
                const sub = document.getElementById('hybrid-portable-key-subbox');
                if (sub) sub.classList.remove('hidden');
                showErr(
                    '<div class="space-y-1.5">' +
                    '<div><b>🔒 Segurança OAuth Obrigatória:</b> Em arquivos abertos via <code>file://</code> o Google bloqueia o OAuth por segurança.</div>' +
                    '<div class="text-[10.5px] text-slate-800">Abra pelo link oficial <a href="https://ceoiuwe.github.io/iuwe-v2/" target="_blank" class="underline text-iuwe-blue font-extrabold">ceoiuwe.github.io/iuwe-v2</a> para autenticar com senha no Google, ou cole sua <b>🔑 Chave Secreta de 128 bits</b> (<code>IUWE-...-iuwe_sec_...</code>) abaixo.</div>' +
                    '</div>'
                );
                return;
            }

            const auth = ensureFirebaseAuthInitialized();
            if (!auth) {
                const sub = document.getElementById('hybrid-portable-key-subbox');
                if (sub) sub.classList.remove('hidden');
                showErr('O SDK do Firebase Auth não pôde ser inicializado neste ambiente. Use sua <b>🔑 Chave Secreta de 128 bits</b> abaixo ou abra em <a href="https://ceoiuwe.github.io/iuwe-v2/" target="_blank" class="underline">ceoiuwe.github.io/iuwe-v2</a>.');
                return;
            }

            if (errBox) errBox.classList.add('hidden');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<i class="fa-solid fa-circle-notch animate-spin"></i> <span>Abrindo autenticação oficial do Google...</span>';
            }

            try {
                if (auth.currentUser && auth.currentUser.uid) {
                    await finalizeHybridGoogleSession(auth.currentUser);
                    return;
                }
                const provider = new window.firebase.auth.GoogleAuthProvider();
                provider.setCustomParameters({ prompt: 'select_account' });
                let result = null;
                try {
                    result = await auth.signInWithPopup(provider);
                } catch (firstErr) {
                    const firstCode = String(firstErr && firstErr.code ? firstErr.code : '');
                    if (firstCode === 'auth/network-request-failed' && window.firebase.auth.Auth && window.firebase.auth.Auth.Persistence) {
                        await auth.setPersistence(window.firebase.auth.Auth.Persistence.NONE).catch(function() {});
                        result = await auth.signInWithPopup(provider);
                    } else {
                        throw firstErr;
                    }
                }
                if (result && result.user) {
                    await finalizeHybridGoogleSession(result.user);
                } else if (auth.currentUser) {
                    await finalizeHybridGoogleSession(auth.currentUser);
                } else {
                    showErr('A janela foi fechada antes de concluir o login. Tente novamente ou continue no modo visitante.');
                }
            } catch (err) {
                const code = String(err && err.code ? err.code : '');
                const rawMsg = String(err && err.message ? err.message : '');
                const sub = document.getElementById('hybrid-portable-key-subbox');
                if (sub) sub.classList.remove('hidden');

                if (code === 'auth/unauthorized-domain') {
                    showErr(
                        '<div class="space-y-1.5">' +
                        '<div><b>Domínio não autorizado no Firebase Auth:</b> Adicione <code>' + escapeHtml(window.location.hostname || 'localhost') + '</code> em <b>Firebase Console ➔ Authentication ➔ Settings ➔ Authorized domains</b>.</div>' +
                        '<div class="text-[10.5px] text-slate-700">Por segurança, o login exige validação real do Google OAuth ou a sua <b>🔑 Chave Secreta de 128 bits</b> (<code>IUWE-...-iuwe_sec_...</code>) abaixo.</div>' +
                        '</div>'
                    );
                } else if (code === 'auth/network-request-failed' || code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment' || code === 'auth/internal-error') {
                    showErr(
                        '<div class="space-y-2">' +
                        '<div><b>🔒 Pop-up OAuth bloqueado neste ambiente (<code>' + escapeHtml(code) + '</code>):</b> O navegador ou um iframe sandboxed (como o preview do Canvas/Brave Shield) bloqueou a comunicação com <code>firebaseapp.com</code>.</div>' +
                        '<div class="text-[10.5px] text-slate-800 font-semibold">Para garantir que ninguém nunca acesse sua conta apenas sabendo seu e-mail, escolha uma opção autenticada abaixo:</div>' +
                        '<div class="flex flex-wrap gap-1.5 pt-0.5">' +
                        '<button type="button" onclick="signInWithGoogleHybridRedirect()" class="px-2.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-[10.5px] cursor-pointer">🔁 1. Entrar via Redirecionamento Google OAuth</button>' +
                        '<a href="https://ceoiuwe.github.io/iuwe-v2/" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1.5 rounded-lg bg-iuwe-blue hover:bg-iuwe-sky text-white font-extrabold text-[10.5px] inline-flex items-center gap-1">🌐 2. Abrir fora do Iframe (GitHub Pages)</a>' +
                        '</div>' +
                        '<div class="text-[10px] text-purple-800 font-bold pt-0.5">🔑 3. Ou cole abaixo a sua Chave Criptográfica Portátil de 128 bits (<code>IUWE-12345678-iuwe_sec_...</code>):</div>' +
                        '</div>'
                    );
                } else {
                    showErr('Aviso do Firebase (' + escapeHtml(code || 'auth') + '): ' + escapeHtml(rawMsg));
                }
            } finally {
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fa-brands fa-google text-base"></i> <span>Entrar com Conta Google (Salvar Meu Histórico)</span>';
                }
            }
        };

        window.logoutHybridGoogleSession = async function() {
            currentGmailAuthSession = null;
            try {
                localStorage.removeItem(GMAIL_HYBRID_SESSION_KEY);
            } catch (e) {}
            try {
                const auth = ensureFirebaseAuthInitialized();
                if (auth) await auth.signOut();
            } catch (e) {}
            applyHybridAuthUiState();
            if (typeof showToast === 'function') {
                showToast('Conta Google desconectada. Você continua no Estúdio Aberto como visitante.', 'info');
            }
        };

        function applyHybridAuthUiState() {
            const sess = loadStoredHybridGoogleSession();
            const isAuthed = Boolean(sess && sess.uid && sess.verifiedByGoogleOAuth);
            const activeHandle = isAuthed ? sess.boundHandle : ensureLocalCryptoIdentity().publicHandle;

            if (typeof currentUserProfile === 'object' && currentUserProfile) {
                currentUserProfile.handle = activeHandle;
                currentUserProfile.displayName = 'ID ' + activeHandle;
                currentUserProfile.authUid = isAuthed ? sess.uid : '';
                if (typeof persistUserPrefs === 'function') persistUserPrefs();
            }

            const h1 = document.getElementById('header-active-handle');
            if (h1) h1.textContent = activeHandle;
            try {
                const publicBadge = document.getElementById('badge-count-public');
                const personalBadge = document.getElementById('badge-count-personal');
                const savedBadge = document.getElementById('badge-count-saved');
                if (typeof archiveRecords !== 'undefined' && Array.isArray(archiveRecords)) {
                    const activePub = archiveRecords.filter(function(r) { return r && (!r.status || r.status === 'ACTIVE_PUBLIC'); });
                    if (publicBadge) publicBadge.textContent = String(activePub.length);
                    const myPosts = activePub.filter(function(r) {
                        const h = (r.creatorMetadata && r.creatorMetadata.handle) || r.authorHandle || '';
                        return h === activeHandle;
                    });
                    if (personalBadge) personalBadge.textContent = String(myPosts.length);
                }
                if (savedBadge && typeof currentUserProfile === 'object' && currentUserProfile && Array.isArray(currentUserProfile.savedPostIds)) {
                    savedBadge.textContent = String(currentUserProfile.savedPostIds.length);
                }
            } catch (e) {}
            const h2 = document.getElementById('creator-active-badge');
            if (h2) h2.textContent = activeHandle;
            const uEl = document.getElementById('cfg-user-handle');
            if (uEl) uEl.value = activeHandle;
            const kpiId = document.getElementById('report-kpi-userid');
            if (kpiId) kpiId.textContent = activeHandle;
            const calloutId = document.getElementById('callout-visitor-id');
            if (calloutId) calloutId.textContent = activeHandle;

            const loginBtn = document.getElementById('header-hybrid-login-btn');
            const verifiedBadge = document.getElementById('header-hybrid-verified-badge');
            const verifiedTxt = document.getElementById('header-hybrid-verified-text');
            const logoutBtn = document.getElementById('header-hybrid-logout-btn');

            if (isAuthed) {
                if (loginBtn) loginBtn.classList.add('hidden');
                if (verifiedBadge) {
                    verifiedBadge.classList.remove('hidden');
                    verifiedBadge.classList.add('flex');
                }
                if (verifiedTxt) verifiedTxt.textContent = sess.maskedEmail;
                if (logoutBtn) {
                    logoutBtn.classList.remove('hidden');
                    logoutBtn.classList.add('flex');
                }
            } else {
                if (loginBtn) loginBtn.classList.remove('hidden');
                if (verifiedBadge) {
                    verifiedBadge.classList.add('hidden');
                    verifiedBadge.classList.remove('flex');
                }
                if (logoutBtn) {
                    logoutBtn.classList.add('hidden');
                    logoutBtn.classList.remove('flex');
                }
            }

            const calloutBanner = document.getElementById('hybrid-unauth-callout-banner');
            if (calloutBanner) {
                const onPersonalOrSaved = (typeof activeMainTab === 'string') && (activeMainTab === 'personal' || activeMainTab === 'saved');
                calloutBanner.classList.toggle('hidden', isAuthed || !onPersonalOrSaved);
            }

            const cfgStatusInput = document.getElementById('cfg-hybrid-google-status');
            const cfgSyncBtn = document.getElementById('cfg-hybrid-sync-btn');
            if (cfgStatusInput) {
                cfgStatusInput.value = isAuthed
                    ? ('Conectado: ' + sess.maskedEmail + ' (Histórico e Salvos Sincronizados ✓)')
                    : 'Modo Visitante Local (Conecte o Google para salvar histórico na nuvem)';
            }
            if (cfgSyncBtn) {
                cfgSyncBtn.textContent = isAuthed ? 'Trocar / Sair' : '☁️ Conectar Google';
                cfgSyncBtn.onclick = function() {
                    if (isAuthed) window.logoutHybridGoogleSession();
                    else window.openHybridGoogleAuthModal('Conecte sua Conta Google para sincronizar suas preferências, tags seguidas e histórico em qualquer dispositivo.');
                };
            }

            if (typeof renderUnifiedFeed === 'function') renderUnifiedFeed();
            if (typeof renderConfigTab === 'function') renderConfigTab();
        }

        // Anexa automaticamente o Token JWT do Firebase Auth nas chamadas ao Firebase RTDB quando autenticado
        const _origRemoteCloudFetch = typeof remoteCloudFetch === 'function' ? remoteCloudFetch : window.fetch.bind(window);
        remoteCloudFetch = async function(url, opts) {
            let finalUrl = String(url || '');
            if (finalUrl.includes('firebaseio.com') && currentGmailAuthSession && currentGmailAuthSession.idToken && !finalUrl.includes('auth=')) {
                const sep = finalUrl.includes('?') ? '&' : '?';
                finalUrl = finalUrl + sep + 'auth=' + encodeURIComponent(currentGmailAuthSession.idToken);
            }
            return _origRemoteCloudFetch(finalUrl, opts);
        };


        // ============================================================================
        // CONTROLE DE COTAS DIÁRIAS, LIMITES ANTI-ARQUIVOS GIGANTES E CACHE DE 5 MIN
        // ============================================================================
        const IUWE_RESOURCE_LIMITS = {
            audiocastMaxCharsPerBlock: 280,
            audiocastMaxAudioBlocks: 12,
            audiocastMaxTotalBlocks: 24,
            audiocastMaxDurationSec: 120,
            flashcardMaxFrontChars: 240,
            flashcardMaxHintChars: 140,
            flashcardMaxBackChars: 240,
            flashcardMaxBackLangs: 3,
            bookletMaxTitleChars: 110,
            bookletMaxSlideChars: 260,
            bookletMaxSlides: 6,
            vocabMaxThemeChars: 110,
            vocabMaxTermChars: 110,
            vocabMaxSentenceChars: 260,
            vocabMaxNoteChars: 140,
            vocabMaxItems: 6,
            maxDailyPostsPerTool: 6,
            maxPayloadBytes: 5 * 1024 * 1024,
            feedCacheTtlMs: 5 * 60 * 1000,
            feedCloudPageLimit: 60
        };

        const DAILY_QUOTA_STORAGE_KEY = 'iuwe_daily_tool_quotas_v3';
        const FEED_SESSION_CACHE_KEY = 'iuwe_feed_cloud_cache_v3';

        function getTodayDateKey() {
            const d = new Date();
            return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        }

        function getDailyToolPostCount(moduleKey) {
            const normMod = (moduleKey === 'vocabulario') ? 'vocabulario_ia' : String(moduleKey || 'audiocast');
            const today = getTodayDateKey();
            const myHandle = getActorHandle().toLowerCase();
            let localCount = 0;
            try {
                const raw = localStorage.getItem(DAILY_QUOTA_STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (parsed && parsed.date === today && parsed.counts && typeof parsed.counts[normMod] === 'number') {
                        localCount = parsed.counts[normMod];
                    }
                }
            } catch (e) {}

            // Também contabiliza posts já presentes no Feed criados hoje pelo mesmo usuário
            let feedCountToday = 0;
            if (typeof archiveRecords !== 'undefined' && Array.isArray(archiveRecords)) {
                const startOfDayMs = new Date(today + 'T00:00:00').getTime();
                archiveRecords.forEach(function(r) {
                    if (!r || isRecordArchivedLgpd(r)) return;
                    const h = getCreatorHandleFromRecord(r).toLowerCase();
                    const m = detectRecordModuleType(r);
                    if (h === myHandle && m === normMod && (r.timestampMs || 0) >= startOfDayMs) {
                        feedCountToday++;
                    }
                });
            }
            return Math.max(localCount, feedCountToday);
        }

        function incrementDailyToolPostCount(moduleKey) {
            const normMod = (moduleKey === 'vocabulario') ? 'vocabulario_ia' : String(moduleKey || 'audiocast');
            const today = getTodayDateKey();
            let data = { date: today, counts: {} };
            try {
                const raw = localStorage.getItem(DAILY_QUOTA_STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (parsed && parsed.date === today && parsed.counts) {
                        data = parsed;
                    }
                }
            } catch (e) {}
            const nextVal = Math.max(getDailyToolPostCount(normMod), Number(data.counts[normMod] || 0)) + 1;
            data.counts[normMod] = nextVal;
            try {
                localStorage.setItem(DAILY_QUOTA_STORAGE_KEY, JSON.stringify(data));
            } catch (e) {}
            updateQuotaBadgesUi();
        }

        function checkCanPublishInToolOrAlert(moduleKey, labelName) {
            const used = getDailyToolPostCount(moduleKey);
            const max = IUWE_RESOURCE_LIMITS.maxDailyPostsPerTool;
            if (used >= max) {
                showToast('⚠️ Limite diário atingido em ' + labelName + ' (' + used + '/' + max + ' publicações hoje). Você ainda pode usar as outras ferramentas ou criar amanhã!', 'error');
                return false;
            }
            return true;
        }

        function updateQuotaBadgesUi() {
            const tools = [
                { mod: 'audiocast', name: 'Audiocast' },
                { mod: 'flashcard', name: 'Flashcard 3D' },
                { mod: 'livreto', name: 'Livreto' },
                { mod: 'vocabulario_ia', name: 'Vocabulário IA' }
            ];
            const summaryEl = document.getElementById('creator-daily-quota-summary');
            if (summaryEl) {
                summaryEl.innerHTML = tools.map(function(t) {
                    const u = getDailyToolPostCount(t.mod);
                    const full = u >= IUWE_RESOURCE_LIMITS.maxDailyPostsPerTool;
                    return '<span class="px-2 py-0.5 rounded-lg border text-[10px] font-extrabold ' + (full ? 'bg-rose-50 border-rose-300 text-rose-700' : 'bg-white border-iuwe-purpleBorder text-slate-800') + '">' +
                        t.name + ': <b class="' + (full ? 'text-rose-700' : 'text-iuwe-blue') + '">' + u + '/' + IUWE_RESOURCE_LIMITS.maxDailyPostsPerTool + '</b> hoje</span>';
                }).join(' ');
            }
        }

        function applyStrictInputMaxLengthsAndGuards() {
            const maxMap = {
                'ac-text-input': IUWE_RESOURCE_LIMITS.audiocastMaxCharsPerBlock,
                'fc-front-text': IUWE_RESOURCE_LIMITS.flashcardMaxFrontChars,
                'fc-front-hint': IUWE_RESOURCE_LIMITS.flashcardMaxHintChars,
                'bk-title-input': IUWE_RESOURCE_LIMITS.bookletMaxTitleChars,
                'bk-primary-text': IUWE_RESOURCE_LIMITS.bookletMaxSlideChars,
                'bk-secondary-text': IUWE_RESOURCE_LIMITS.bookletMaxSlideChars,
                'bk-tertiary-text': IUWE_RESOURCE_LIMITS.bookletMaxSlideChars,
                'vc-theme-input': IUWE_RESOURCE_LIMITS.vocabMaxThemeChars,
                'vc-note-input': IUWE_RESOURCE_LIMITS.vocabMaxNoteChars,
                'vc-primary-term': IUWE_RESOURCE_LIMITS.vocabMaxTermChars,
                'vc-primary-sentence': IUWE_RESOURCE_LIMITS.vocabMaxSentenceChars,
                'vc-secondary-term': IUWE_RESOURCE_LIMITS.vocabMaxTermChars,
                'vc-secondary-sentence': IUWE_RESOURCE_LIMITS.vocabMaxSentenceChars,
                'vc-tertiary-term': IUWE_RESOURCE_LIMITS.vocabMaxTermChars,
                'vc-tertiary-sentence': IUWE_RESOURCE_LIMITS.vocabMaxSentenceChars,
                'creator-custom-tags': 90
            };
            Object.keys(maxMap).forEach(function(id) {
                const el = document.getElementById(id);
                if (el) el.setAttribute('maxlength', String(maxMap[id]));
            });

            // Restringe seletor do Gerador de Vocabulário para até 6 sentenças (termos)
            const vcCountSel = document.getElementById('vc-count-select');
            if (vcCountSel) {
                vcCountSel.innerHTML = [
                    '<option value="3" selected>3 Sentenças (Termos)</option>',
                    '<option value="4">4 Sentenças (Termos)</option>',
                    '<option value="5">5 Sentenças (Termos)</option>',
                    '<option value="6">6 Sentenças (Máx. p/ Arquivo Leve)</option>'
                ].join('');
            }

            // Envolve addAudioBlock e addPauseBlock para limitar a 5 falas / 8 blocos e 45s totais no Audiocast
            if (typeof window.addAudioBlock === 'function' && !window._wrappedAddAudioBlock) {
                const _origAddAudio = window.addAudioBlock;
                window._wrappedAddAudioBlock = true;
                window.addAudioBlock = async function() {
                    if (typeof cycleBlocks !== 'undefined' && Array.isArray(cycleBlocks)) {
                        const audioCount = cycleBlocks.filter(function(b) { return b.kind === 'audio'; }).length;
                        const totalDur = cycleBlocks.reduce(function(acc, b) { return acc + (b.durationSec || 0); }, 0);
                        if (cycleBlocks.length >= IUWE_RESOURCE_LIMITS.audiocastMaxTotalBlocks || audioCount >= IUWE_RESOURCE_LIMITS.audiocastMaxAudioBlocks) {
                            showToast('Limite por Audiocast: máximo de ' + IUWE_RESOURCE_LIMITS.audiocastMaxAudioBlocks + ' blocos de fala (e ' + IUWE_RESOURCE_LIMITS.audiocastMaxTotalBlocks + ' blocos totais) para manter o arquivo .WAV leve!', 'error');
                            return;
                        }
                        if (totalDur >= IUWE_RESOURCE_LIMITS.audiocastMaxDurationSec) {
                            showToast('Duração máxima de ' + IUWE_RESOURCE_LIMITS.audiocastMaxDurationSec + 's por Audiocast atingida!', 'error');
                            return;
                        }
                    }
                    const txtEl = document.getElementById('ac-text-input');
                    if (txtEl && txtEl.value.length > IUWE_RESOURCE_LIMITS.audiocastMaxCharsPerBlock) {
                        txtEl.value = txtEl.value.slice(0, IUWE_RESOURCE_LIMITS.audiocastMaxCharsPerBlock);
                    }
                    return _origAddAudio.apply(this, arguments);
                };
            }

            if (typeof window.addPauseBlock === 'function' && !window._wrappedAddPauseBlock) {
                const _origAddPause = window.addPauseBlock;
                window._wrappedAddPauseBlock = true;
                window.addPauseBlock = function() {
                    if (typeof cycleBlocks !== 'undefined' && Array.isArray(cycleBlocks)) {
                        const totalDur = cycleBlocks.reduce(function(acc, b) { return acc + (b.durationSec || 0); }, 0);
                        if (cycleBlocks.length >= IUWE_RESOURCE_LIMITS.audiocastMaxTotalBlocks || totalDur >= IUWE_RESOURCE_LIMITS.audiocastMaxDurationSec) {
                            showToast('Limite de ' + IUWE_RESOURCE_LIMITS.audiocastMaxTotalBlocks + ' blocos ou ' + IUWE_RESOURCE_LIMITS.audiocastMaxDurationSec + 's por trilha atingido!', 'error');
                            return;
                        }
                    }
                    return _origAddPause.apply(this, arguments);
                };
            }

            // Envolve addBackLanguageItem para limitar o Verso do Flashcard 3D a no máximo 3 idiomas
            if (typeof window.addBackLanguageItem === 'function' && !window._wrappedAddBackLang) {
                const _origAddBack = window.addBackLanguageItem;
                window._wrappedAddBackLang = true;
                window.addBackLanguageItem = function() {
                    if (typeof backLanguageItems !== 'undefined' && Array.isArray(backLanguageItems) && backLanguageItems.length >= IUWE_RESOURCE_LIMITS.flashcardMaxBackLangs) {
                        showToast('Limite de ' + IUWE_RESOURCE_LIMITS.flashcardMaxBackLangs + ' idiomas no Verso (Lado B) atingido para manter o Flashcard 3D leve!', 'error');
                        return;
                    }
                    return _origAddBack.apply(this, arguments);
                };
            }

            // Envolve addNewBlankSlide e duplicateCurrentSlideForAnotherLang para limitar o Livreto a 5 slides
            if (typeof window.addNewBlankSlide === 'function' && !window._wrappedAddSlide) {
                const _origAddSlide = window.addNewBlankSlide;
                const _origDupSlide = window.duplicateCurrentSlideForAnotherLang;
                window._wrappedAddSlide = true;
                window.addNewBlankSlide = function() {
                    if (typeof bookletSlides !== 'undefined' && Array.isArray(bookletSlides) && bookletSlides.length >= IUWE_RESOURCE_LIMITS.bookletMaxSlides) {
                        showToast('Limite máximo de ' + IUWE_RESOURCE_LIMITS.bookletMaxSlides + ' slides por Livreto Ilustrado atingido para evitar arquivos pesados!', 'error');
                        return;
                    }
                    return _origAddSlide.apply(this, arguments);
                };
                if (typeof _origDupSlide === 'function') {
                    window.duplicateCurrentSlideForAnotherLang = async function() {
                        if (typeof bookletSlides !== 'undefined' && Array.isArray(bookletSlides) && bookletSlides.length >= IUWE_RESOURCE_LIMITS.bookletMaxSlides) {
                            showToast('Limite máximo de ' + IUWE_RESOURCE_LIMITS.bookletMaxSlides + ' slides por Livreto Ilustrado atingido!', 'error');
                            return;
                        }
                        return _origDupSlide.apply(this, arguments);
                    };
                }
            }

            // Envolve as 4 funções de publicação para validar a Cota Diária (3 posts/ferramenta/dia)
            const pubWrappers = [
                { fn: 'postAndArchiveAudiocast', mod: 'audiocast', label: 'Audiocast' },
                { fn: 'postAndArchiveFlashcard', mod: 'flashcard', label: 'Flashcard 3D' },
                { fn: 'postAndArchiveBooklet', mod: 'livreto', label: 'Livreto Ilustrado' },
                { fn: 'postAndArchiveVocabulary', mod: 'vocabulario_ia', label: 'Vocabulário IA' }
            ];
            pubWrappers.forEach(function(item) {
                if (typeof window[item.fn] === 'function' && !window['_wrapped_' + item.fn]) {
                    const _origPub = window[item.fn];
                    window['_wrapped_' + item.fn] = true;
                    window[item.fn] = async function() {
                        if (!checkCanPublishInToolOrAlert(item.mod, item.label)) return;
                        const beforeLen = (typeof archiveRecords !== 'undefined' && Array.isArray(archiveRecords)) ? archiveRecords.length : 0;
                        await _origPub.apply(this, arguments);
                        const afterLen = (typeof archiveRecords !== 'undefined' && Array.isArray(archiveRecords)) ? archiveRecords.length : 0;
                        if (afterLen > beforeLen) {
                            incrementDailyToolPostCount(item.mod);
                            try { sessionStorage.removeItem(FEED_SESSION_CACHE_KEY); } catch (e) {}
                        }
                    };
                }
            });

            // Otimiza refreshFeedFromCloudDb com Cache de Sessão de 5 minutos + Paginação limitToLast=50
            if (typeof window.refreshFeedFromCloudDb === 'function' && !window._wrappedRefreshFeed) {
                window._wrappedRefreshFeed = true;
                window.refreshFeedFromCloudDb = async function(silent) {
                    const fbUrl = DEFAULT_FIREBASE_URL.trim().replace(/\/+$/, '');
                    const icon = document.getElementById('refresh-feed-icon');

                    // Se for carregamento automático (silent=true), verifica cache de 5 minutos para poupar os 10 GB/mês do Firebase
                    if (silent) {
                        try {
                            const cachedRaw = sessionStorage.getItem(FEED_SESSION_CACHE_KEY);
                            if (cachedRaw) {
                                const cachedObj = JSON.parse(cachedRaw);
                                if (cachedObj && (Date.now() - (cachedObj.ts || 0)) < IUWE_RESOURCE_LIMITS.feedCacheTtlMs && Array.isArray(cachedObj.records) && cachedObj.records.length > 0) {
                                    const map = new Map();
                                    archiveRecords.forEach(function(r) { if (r && r.archiveId) map.set(r.archiveId, r); });
                                    cachedObj.records.forEach(function(cr) { if (cr && cr.archiveId) map.set(cr.archiveId, Object.assign({}, map.get(cr.archiveId) || {}, cr)); });
                                    archiveRecords = Array.from(map.values()).sort(function(a, b) { return (b.timestampMs || 0) - (a.timestampMs || 0); });
                                    renderUnifiedFeed();
                                    updateQuotaBadgesUi();
                                    return;
                                }
                            }
                        } catch (e) {}
                    }

                    if (icon) icon.classList.add('animate-spin');
                    try {
                        if (fbUrl) {
                            // Busca apenas os 50 posts mais recentes (limitToLast=50), economizando ~80% de banda em feeds grandes
                            let res = await remoteCloudFetch(fbUrl + '/audiocasts.json?orderBy=%22timestampMs%22&limitToLast=' + IUWE_RESOURCE_LIMITS.feedCloudPageLimit);
                            if (!res.ok) {
                                res = await remoteCloudFetch(fbUrl + '/audiocasts.json');
                            }
                            if (res.ok) {
                                const data = await res.json();
                                if (data && typeof data === 'object') {
                                    const map = new Map();
                                    archiveRecords.forEach(function(r) { if (r && r.archiveId) map.set(r.archiveId, r); });
                                    Object.values(data).forEach(function(cloudRec) {
                                        if (!cloudRec || !cloudRec.archiveId) return;
                                        const local = map.get(cloudRec.archiveId) || {};
                                        const merged = Object.assign({}, local, cloudRec);
                                        merged.moduleType = detectRecordModuleType(merged);
                                        map.set(cloudRec.archiveId, merged);
                                    });
                                    archiveRecords = Array.from(map.values()).sort(function(a, b) { return (b.timestampMs || 0) - (a.timestampMs || 0); });
                                    saveLocalRecords();
                                    try {
                                        sessionStorage.setItem(FEED_SESSION_CACHE_KEY, JSON.stringify({
                                            ts: Date.now(),
                                            records: archiveRecords.slice(0, IUWE_RESOURCE_LIMITS.feedCloudPageLimit)
                                        }));
                                    } catch (e) {}
                                }
                            }
                        }
                        ensureDemoSeedPostsIfEmpty();
                        renderUnifiedFeed();
                        updateQuotaBadgesUi();
                        if (!silent) showToast('Feed atualizado da nuvem (últimos ' + Math.min(archiveRecords.length, IUWE_RESOURCE_LIMITS.feedCloudPageLimit) + ' posts)!', 'success');
                    } catch (e) {
                        renderUnifiedFeed();
                        updateQuotaBadgesUi();
                    } finally {
                        if (icon) icon.classList.remove('animate-spin');
                    }
                };
            }
            updateQuotaBadgesUi();
        }

        window.addEventListener('DOMContentLoaded', function() {
            setTimeout(applyStrictInputMaxLengthsAndGuards, 80);
            ensureLocalCryptoIdentity();
            applyHybridAuthUiState();
            const auth = ensureFirebaseAuthInitialized();
            if (auth) {
                auth.onAuthStateChanged(function(user) {
                    if (user) {
                        finalizeHybridGoogleSession(user);
                    }
                });
            }
        });

        // ============================================================================
        // FILA DE PRIORIDADE DE RECURSOS + PACE DE CHAMADAS + BLOQUEIO DE 60s PÓS-LIMITE
        // ============================================================================
        const IUWE_API_COOLDOWN_SECONDS = 4; // Pausa curta entre chamadas normais (rotação multi-modelo 3.8/3.1)
        let iuweApiBusyNow = false;
        let iuweApiCooldownUntilMs = 0;
        let iuweApiCooldownReason = '';
        let iuweApiCooldownTimerId = null;

        // Apenas botões que consomem IA (Áudio Neural TTS e Gerador de Frases do Vocabulário IA).
        // Botões de tradução são 100% gratuitos (zero chamadas de IA) e ficam sempre livres!
        const STUDIO_GEN_BUTTON_SELECTORS = [
            '#btn-add-audio-block',
            '#btn-gen-front-audio',
            '[id^="btn-gen-back-audio-"]',
            '#btn-gen-all-card-audios',
            '#bk-btn-gen-primary-audio',
            '#bk-btn-gen-secondary-audio',
            '#bk-btn-gen-tertiary-audio',
            '#btn-gen-all-booklet',
            '#btn-generate-ai-vocab',
            '#vc-btn-gen-primary-audio',
            '#vc-btn-gen-secondary-audio',
            '#vc-btn-gen-tertiary-audio',
            '#btn-gen-all-vocab-audios'
        ].join(', ');

        function getRemainingCooldownSeconds() {
            const diff = iuweApiCooldownUntilMs - Date.now();
            return diff > 0 ? Math.ceil(diff / 1000) : 0;
        }

        function updateStudioCooldownBannersAndButtons() {
            const rem = getRemainingCooldownSeconds();
            const isBlocked = iuweApiBusyNow || rem > 0;
            const btns = document.querySelectorAll(STUDIO_GEN_BUTTON_SELECTORS);
            btns.forEach(function(b) {
                if (isBlocked) {
                    b.disabled = true;
                    b.classList.add('opacity-60', 'cursor-not-allowed');
                } else {
                    b.disabled = false;
                    b.classList.remove('opacity-60', 'cursor-not-allowed');
                }
            });

            const statusIds = ['api-cooldown-status-ac', 'api-cooldown-status-fc', 'api-cooldown-status-bk', 'api-cooldown-status-vc'];
            statusIds.forEach(function(id) {
                const el = document.getElementById(id);
                if (!el) return;
                if (iuweApiBusyNow) {
                    el.className = 'rounded-xl px-3 py-1.5 text-[11px] font-extrabold bg-amber-100 border border-amber-400 text-amber-950 flex items-center justify-between gap-2';
                    el.innerHTML = '<span><i class="fa-solid fa-spinner animate-spin mr-1.5"></i>Fila de Prioridade IA ativa (Gemini 3.8 Flash-Lite / 3.8 Flash / 3.1 TTS)... Processando chamada respeitando o tempo da API.</span>';
                } else if (rem > 0) {
                    const isLongLock = rem > 10;
                    el.className = 'rounded-xl px-3 py-1.5 text-[11px] font-extrabold ' + (isLongLock ? 'bg-rose-50 border border-rose-300 text-rose-900' : 'bg-amber-50 border border-amber-300 text-amber-900') + ' flex items-center justify-between gap-2';
                    el.innerHTML = '<span><i class="fa-solid fa-hourglass-half ' + (isLongLock ? 'text-rose-600' : 'text-amber-600') + ' mr-1.5"></i>' +
                        (isLongLock
                            ? ('Bloqueio temporário anti-penalidade Google (60s): aguarde <b>' + rem + 's</b> antes de enviar qualquer nova tentativa.')
                            : ('Sincronizando fila de recursos da API: aguarde <b>' + rem + 's</b> para a próxima chamada.')) +
                        '</span><span class="px-2 py-0.5 rounded-full ' + (isLongLock ? 'bg-rose-600' : 'bg-amber-500') + ' text-white text-[10px]">' + rem + 's</span>';
                } else {
                    el.className = 'rounded-xl px-3 py-1.5 text-[10.5px] font-bold bg-emerald-50/80 border border-emerald-200 text-emerald-900 flex items-center justify-between gap-2';
                    el.innerHTML = '<span><i class="fa-solid fa-shield-heart text-emerald-600 mr-1.5"></i>Fila de Prioridade IA ativa (3.8 Flash-Lite / 3.8 Flash / 3.1 TTS) • Tradução 100% Gratuita (0 calls IA) • Bloqueio de proteção de 60s pós-limite.</span>';
                }
            });
        }

        function startCooldownTicker(seconds, reasonText = '') {
            iuweApiBusyNow = false;
            const targetUntil = Date.now() + (seconds * 1000);
            // Nunca reduz um bloqueio de 60s já ativo por uma pausa curta de 4s!
            if (targetUntil > iuweApiCooldownUntilMs) {
                iuweApiCooldownUntilMs = targetUntil;
                if (reasonText) iuweApiCooldownReason = reasonText;
            }
            if (iuweApiCooldownTimerId) clearInterval(iuweApiCooldownTimerId);
            updateStudioCooldownBannersAndButtons();
            iuweApiCooldownTimerId = setInterval(function() {
                const rem = getRemainingCooldownSeconds();
                updateStudioCooldownBannersAndButtons();
                if (rem <= 0) {
                    iuweApiCooldownReason = '';
                    clearInterval(iuweApiCooldownTimerId);
                    iuweApiCooldownTimerId = null;
                }
            }, 350);
        }

        function withApiCooldownGuard(fn, cooldownSec) {
            return async function() {
                const rem = getRemainingCooldownSeconds();
                if (rem > 0) {
                    showToast('⏳ Bloqueio temporário da API ativo: aguarde mais ' + rem + 's antes de enviar nova tentativa!', 'info');
                    return;
                }
                // Se estivermos dentro de uma execução em lote ("Gerar Todos"), a fila de prioridade gerencia o espaçamento item a item
                if (iuweBatchGenerationActive) {
                    return await fn.apply(this, arguments);
                }
                if (iuweApiBusyNow) {
                    showToast('⏳ Aguarde a chamada atual da fila terminar antes de iniciar outra!', 'info');
                    return;
                }
                iuweApiBusyNow = true;
                updateStudioCooldownBannersAndButtons();
                try {
                    return await fn.apply(this, arguments);
                } finally {
                    const postRem = getRemainingCooldownSeconds();
                    if (postRem > 0) {
                        // Um bloqueio de 60s já foi engatilhado durante a chamada
                        iuweApiBusyNow = false;
                        updateStudioCooldownBannersAndButtons();
                    } else {
                        startCooldownTicker(cooldownSec || IUWE_API_COOLDOWN_SECONDS);
                    }
                }
            };
        }

        // Estado e Funções do Seletor de Cores de Fundo e Texto (Flashcard, Livreto, Vocabulário IA)
        const studioCardStyles = {
            flashcard: { bgColor: '#1e1b4b', textColor: '#ffffff' },
            livreto: { bgColor: '#1e1b4b', textColor: '#ffffff' },
            vocabulario: { bgColor: '#134e4a', textColor: '#ffffff' }
        };

        const IUWE_COLOR_PRESETS = {
            noite_iuwe: { bgColor: '#1e1b4b', textColor: '#ffffff' },
            lavanda_claro: { bgColor: '#f5efff', textColor: '#0f172a' },
            oceano_escuro: { bgColor: '#0f172a', textColor: '#e0f2fe' },
            gelo_claro: { bgColor: '#eff6ff', textColor: '#0c4a6e' },
            esmeralda_escuro: { bgColor: '#134e4a', textColor: '#ecfdf5' },
            pergaminho_claro: { bgColor: '#fffbeb', textColor: '#451a03' },
            grafite_escuro: { bgColor: '#18181b', textColor: '#fafafa' },
            branco_classico: { bgColor: '#ffffff', textColor: '#0f172a' }
        };

        window.getStudioCardStyle = function(toolKey) {
            return studioCardStyles[toolKey] || { bgColor: '#1e1b4b', textColor: '#ffffff' };
        };

        window.applyStudioColorCustomization = function(toolKey, triggerSource) {
            const prefix = toolKey === 'flashcard' ? 'fc' : (toolKey === 'livreto' ? 'bk' : 'vc');
            const presetEl = document.getElementById(prefix + '-color-preset');
            const bgEl = document.getElementById(prefix + '-bg-color');
            const txtEl = document.getElementById(prefix + '-text-color');
            const bgHexLbl = document.getElementById(prefix + '-bg-hex-label');
            const txtHexLbl = document.getElementById(prefix + '-text-hex-label');

            if (triggerSource === 'preset' && presetEl && IUWE_COLOR_PRESETS[presetEl.value]) {
                const p = IUWE_COLOR_PRESETS[presetEl.value];
                if (bgEl) bgEl.value = p.bgColor;
                if (txtEl) txtEl.value = p.textColor;
            } else if (triggerSource === 'picker' && presetEl) {
                presetEl.value = 'custom';
            }

            const bgColor = (bgEl && bgEl.value) ? bgEl.value : studioCardStyles[toolKey].bgColor;
            const textColor = (txtEl && txtEl.value) ? txtEl.value : studioCardStyles[toolKey].textColor;
            studioCardStyles[toolKey] = { bgColor, textColor };

            if (bgHexLbl) bgHexLbl.textContent = bgColor.toUpperCase();
            if (txtHexLbl) txtHexLbl.textContent = textColor.toUpperCase();

            if (toolKey === 'flashcard') {
                const inner = document.getElementById('draft-flip-card-inner');
                if (inner) {
                    inner.querySelectorAll('.flip-card-face').forEach(function(face) {
                        face.style.setProperty('background', bgColor, 'important');
                        face.style.setProperty('color', textColor, 'important');
                    });
                }
                const fTxt = document.getElementById('preview-front-text');
                const fHint = document.getElementById('preview-front-hint');
                if (fTxt) fTxt.style.setProperty('color', textColor, 'important');
                if (fHint) fHint.style.setProperty('color', textColor, 'important');
                const backList = document.getElementById('preview-back-translations-list');
                if (backList) {
                    backList.querySelectorAll('div').forEach(function(d) {
                        if (d.classList.contains('text-white') || d.classList.contains('text-purple-200')) {
                            d.style.setProperty('color', textColor, 'important');
                        }
                    });
                }
            } else if (toolKey === 'livreto') {
                const stage = document.querySelector('#builder-box-livreto .slide-stage');
                if (stage) {
                    stage.style.setProperty('background', bgColor, 'important');
                    stage.style.setProperty('color', textColor, 'important');
                }
                const langsBox = document.getElementById('stage-languages-container');
                if (langsBox) {
                    langsBox.querySelectorAll('.text-white').forEach(function(el) {
                        el.style.setProperty('color', textColor, 'important');
                    });
                }
            } else if (toolKey === 'vocabulario') {
                const stage = document.querySelector('#builder-box-vocabulario .vocab-stage');
                if (stage) {
                    stage.style.setProperty('background', bgColor, 'important');
                    stage.style.setProperty('color', textColor, 'important');
                }
                const noteEl = document.getElementById('stage-vocab-note');
                if (noteEl) noteEl.style.setProperty('color', textColor, 'important');
                const langsBox = document.getElementById('stage-vocab-languages-container');
                if (langsBox) {
                    langsBox.querySelectorAll('.text-white, .text-amber-300').forEach(function(el) {
                        el.style.setProperty('color', textColor, 'important');
                    });
                }
            }
        };

        function installApiCooldownAndColorHooks() {
            const fnsToGuardAi = [
                'addAudioBlock',
                'generateFrontSideAudio',
                'generateSingleBackItemAudio',
                'generateCurrentSlideLangAudio',
                'generateVocabularyListWithGeminiAI',
                'generateCurrentVocabLangAudio'
            ];

            fnsToGuardAi.forEach(function(fnName) {
                if (typeof window[fnName] === 'function' && !window[fnName]._hasCooldownGuard) {
                    const wrapped = withApiCooldownGuard(window[fnName], IUWE_API_COOLDOWN_SECONDS);
                    wrapped._hasCooldownGuard = true;
                    window[fnName] = wrapped;
                }
            });

            // Re-apply custom colors whenever preview stages re-render
            if (typeof window.syncDraftPreviewCard === 'function' && !window.syncDraftPreviewCard._hasColorHook) {
                const origSyncFc = window.syncDraftPreviewCard;
                window.syncDraftPreviewCard = function() {
                    const r = origSyncFc.apply(this, arguments);
                    window.applyStudioColorCustomization('flashcard', 'sync');
                    updateStudioCooldownBannersAndButtons();
                    return r;
                };
                window.syncDraftPreviewCard._hasColorHook = true;
            }

            if (typeof window.renderActiveSlideStage === 'function' && !window.renderActiveSlideStage._hasColorHook) {
                const origRenderBk = window.renderActiveSlideStage;
                window.renderActiveSlideStage = function() {
                    const r = origRenderBk.apply(this, arguments);
                    window.applyStudioColorCustomization('livreto', 'sync');
                    updateStudioCooldownBannersAndButtons();
                    return r;
                };
                window.renderActiveSlideStage._hasColorHook = true;
            }

            if (typeof window.renderActiveVocabStage === 'function' && !window.renderActiveVocabStage._hasColorHook) {
                const origRenderVc = window.renderActiveVocabStage;
                window.renderActiveVocabStage = function() {
                    const r = origRenderVc.apply(this, arguments);
                    window.applyStudioColorCustomization('vocabulario', 'sync');
                    updateStudioCooldownBannersAndButtons();
                    return r;
                };
                window.renderActiveVocabStage._hasColorHook = true;
            }

            updateStudioCooldownBannersAndButtons();
            window.applyStudioColorCustomization('flashcard', 'init');
            window.applyStudioColorCustomization('livreto', 'init');
            window.applyStudioColorCustomization('vocabulario', 'init');
        }

        window.addEventListener('DOMContentLoaded', function() {
            setTimeout(installApiCooldownAndColorHooks, 140);
        });
