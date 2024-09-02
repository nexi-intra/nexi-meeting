import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Clock,
  Globe,
  Users,
  MessageSquare,
  ThumbsUp,
  Building2,
  Car,
  Video,
} from "lucide-react";

export default function ItalianDashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Analisi Riunioni</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frequenza Riunioni per Dipartimento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Frequenza Riunioni
            </CardTitle>
            <CardDescription>Riunioni per dipartimento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Marketing</span>
                <Badge variant="secondary">32</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Ingegneria</span>
                <Badge variant="secondary">28</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Vendite</span>
                <Badge variant="secondary">24</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Risorse Umane</span>
                <Badge variant="secondary">18</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Durata Media Riunioni */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Durata Media
            </CardTitle>
            <CardDescription>
              Statistiche sulla durata delle riunioni
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <span className="text-4xl font-bold">47 min</span>
              <p className="text-sm text-muted-foreground mt-2">
                Durata media delle riunioni
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span>Più breve</span>
                <Badge variant="outline">15 min</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Più lunga</span>
                <Badge variant="outline">120 min</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Distribuzione Globale Orari Riunioni */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Distribuzione Globale
            </CardTitle>
            <CardDescription>
              Orari delle riunioni nei diversi fusi orari
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Americhe</span>
                <Badge variant="secondary">40%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Europa</span>
                <Badge variant="secondary">35%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Asia-Pacifico</span>
                <Badge variant="secondary">25%</Badge>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Orario di punta: 14:00 UTC
            </div>
          </CardContent>
        </Card>

        {/* Partecipanti Più Attivi */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Partecipanti Attivi
            </CardTitle>
            <CardDescription>
              Maggiori contributori nelle riunioni
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Sarah Johnson (Marketing)</li>
              <li>Michael Chen (Ingegneria)</li>
              <li>Emma Rodriguez (Vendite)</li>
              <li>David Kim (Prodotto)</li>
              <li>Lisa Patel (Risorse Umane)</li>
            </ol>
          </CardContent>
        </Card>

        {/* Nuvola di Parole Argomenti Riunioni */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Tendenze Argomenti
            </CardTitle>
            <CardDescription>Argomenti discussi frequentemente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge className="text-lg">Strategia</Badge>
              <Badge className="text-base">Innovazione</Badge>
              <Badge className="text-xl">Prodotto</Badge>
              <Badge className="text-sm">Marketing</Badge>
              <Badge className="text-lg">Vendite</Badge>
              <Badge className="text-base">Cliente</Badge>
              <Badge className="text-sm">Tecnologia</Badge>
              <Badge className="text-lg">Crescita</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Valutazioni Soddisfazione Riunioni */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5" />
              Valutazioni Soddisfazione
            </CardTitle>
            <CardDescription>
              Feedback dei partecipanti sulle riunioni
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-24">Eccellente</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <span className="w-12 text-right">40%</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Buono</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <span className="w-12 text-right">35%</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Medio</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <span className="w-12 text-right">15%</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Scarso</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <span className="w-12 text-right">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Utilizzo Risorse */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Utilizzo Risorse
            </CardTitle>
            <CardDescription>
              Uso delle sale riunioni e delle strutture
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Sale Riunioni
                  </span>
                  <Badge variant="secondary">85% utilizzate</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Parcheggi
                  </span>
                  <Badge variant="secondary">70% occupati</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Videoconferenze
                  </span>
                  <Badge variant="secondary">60% in uso</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Picco di utilizzo: Martedì e Giovedì, 10:00 - 14:00
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
